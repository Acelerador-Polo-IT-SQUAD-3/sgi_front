import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol,IonGrid,IonInput,IonItem,IonLabel,IonList,IonRow,IonSelect,IonSelectOption,IonTitle,} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Team } from "../pages/TeamList";
import { Program, Technology } from "../util/types"
import { BsTrash3Fill } from "react-icons/bs";

interface TeamFilterProps {
  teams: Team[];
  onAddTeam: (team: Team) => void;
  onSubmit: (data: any) => void;
  onRemoveTeam: (id: number) => void;
  clearTeams: () => void;

}

const TeamFilter: React.FC<TeamFilterProps> = ({ teams, onAddTeam, onRemoveTeam, onSubmit,clearTeams }) => {
  const [program, setProgram] = useState<string | undefined>(undefined);
  const [technology, setTechnology] = useState<Technology | undefined>(undefined);
  const [maxTeams, setMaxTeams] = useState<number | undefined>(undefined);
  const [personCount, setPersonCount] = useState<number | undefined>(undefined);
  const [mentorTechnology, setMentorTechnology] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleApply = () => {
    if (technology && personCount) {
      const isTechnologyExists = teams.some(team => team.teamTechnologies === technology.id);
      if (isTechnologyExists) {
        setError("La tecnología ya existe en la lista.");
        return;
      }
      const newTeam: Team = {
        id: teams.length + 1,
        teamTechnologies: technology,
        reqQuantity: personCount,
        mentorTechnologies: mentorTechnology.join(',')
      };
      onAddTeam(newTeam);
      setTechnology(undefined);
      setPersonCount(undefined);
      setError(null);
    }
  };

  const handleSubmit = () => {
    if (program === undefined) {
      return setError("Por favor, selecciona un programa.");
    }
    if (maxTeams === undefined) {
      return setError("Por favor, completa la cantidad máxima de equipos.");
    }

    const data = {
      id: Number(program),
      cant_max_equipos: maxTeams,
      conocimientos_por_equipo: {
        ids_tecnologias: teams.map(team => team.teamTechnologies?.id),
        cantidad_requerida: teams.map(team => Number(team.reqQuantity)),
      },
      conocimientos_por_mentor: mentorTechnology.map(tech => Number(tech))
    };

    onSubmit(data);
    setError(null);
  };

  const fetchSelect = async (setArray: any, serviceName: string) => {
    try {
      const response = await fetch(`${apiUrl}/${serviceName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Error al obtener los roles');
      }
      const data = await response.json();
      setArray(data);
    }
    catch (error) {
      console.error('Error fetching roles:', error);
    }
  }
  useEffect(() => {
    fetchSelect(setPrograms, 'prog');
    fetchSelect(setTechnologies, 'tech');
  },[]);

  const handleClear = () => {
    clearTeams()
    setProgram(undefined);
    setTechnology(undefined);
    setMaxTeams(undefined);
    setPersonCount(undefined);
    setMentorTechnology([]);
    setError(null);
  };

  return (
    <section className="px-2">
      <IonTitle className="p-0 mb-2 font-bold font-poppins text-[14px]">Asignación de equipos</IonTitle>
      <IonGrid>
        <IonRow>
          <IonCol> 
            <IonSelect
              interface="popover"
              aria-label="Programa"
              placeholder="Programa"
              fill="outline"
              label-placement="floating"
              value={program}
              onIonChange={(e) => setProgram(e.detail.value)}
              className="rounded-md bg-white custom-input "
            >
              {programs.map((value) => {
                return (
                    <IonSelectOption key={value.id} value={value.id}>
                        {value.name} - {value.description}
                    </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonSelect
              interface="popover"
              aria-label="Áreas de conocimiento del mentor"
              placeholder="Áreas de conocimiento del mentor"
              label-placement="floating"
              fill="outline"
              value={mentorTechnology}
              onIonChange={(e) => setMentorTechnology(e.detail.value)}
              multiple={true}
              className="rounded-md bg-white"
            >
              {technologies.map((value) => {
                return (
                  <IonSelectOption key={value.id} value={value.id}>
                      {value.name}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonCol>
          <IonCol>
            <IonInput
              type="number"
              min={1}
              max={200}
              labelPlacement="floating"
              fill="outline"
              aria-label="Cantidad max. de equipos"
              label="Cantidad max. de equipos"
              value={maxTeams}
              onIonChange={(e) => {
                const value = e.detail.value;
                if (value !== undefined && !isNaN(Number(value))) {
                  setMaxTeams(Number(value));
                } else {
                  setMaxTeams(undefined);
                }
              }}
              className="rounded-md bg-white"
            />
          </IonCol>
        </IonRow>
      </IonGrid>
      {error && (
        <div className="text-center">
          <IonLabel color="danger">{error}</IonLabel>
        </div>
      )}
      <br/>
      <IonTitle className="p-0 mb-2 font-poppins text-[14px]">Configuración</IonTitle>
      <IonCard className="bg-white py-8">
        <IonCardContent className="bg-transparent">
          <IonList className="bg-transparent">
            <IonGrid>
              <IonRow>
                <IonCol className="flex items-center gap-2 py-2">
                  <IonSelect
                    interface="popover"
                    aria-label="Área de conocimiento"
                    placeholder="Área de conocimiento"
                    label-placement="floating"
                    fill="outline"
                    value={technology}
                    onIonChange={(e) => {
                      setTechnology(technologies.find(tech => tech.id === e.detail.value))
                    }}
                    className="bg-white"
                  >
                    {technologies.map((value) => {
                      return (
                        <IonSelectOption key={value.id} value={value.id}>
                            {value.name}
                        </IonSelectOption>
                      );
                    })}
                  </IonSelect>
                </IonCol>
                <IonCol className="flex items-center gap-2">
                  <IonInput
                    type="number"
                    min={1}
                    max={200}
                    labelPlacement="floating"
                    fill="outline"
                    aria-label="Cantidad de personas"
                    label="Cantidad de personas"
                    value={personCount}
                    onIonChange={(e) => {
                      const value = e.detail.value;
                      if (value !== undefined && !isNaN(Number(value))) {
                        setPersonCount(Number(value));
                      } else {
                        setPersonCount(undefined);
                      }
                    }}
                    className="rounded-md h-10 bg-transparent"
                  />
                </IonCol>
                <IonCol className="flex justify-around">
                  <button 
                    style={{ width: '105px', height: '40px' }}
                    className="bg-[#E65C4F] text-black font-bold rounded-lg py-1"
                    onClick={handleApply}
                  >
                    Agregar 
                  </button>
                </IonCol>
              </IonRow>
              {teams.map((team, index) => (
                <IonRow key={index} className="py-4">
                  <IonCol>
                    <p>{team.teamTechnologies?.name}</p>
                  </IonCol>
                  <IonCol className="flex justify-around">
                    <p>{team.reqQuantity}</p>
                  </IonCol>
                  <IonCol className="flex justify-around">
                    <BsTrash3Fill 
                      style={{ color: '#D8434380' }} 
                      className="hover:text-[#D8434380] text-xl lg:text-2xl"
                      onClick={() => onRemoveTeam(team.id)}
                    />
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonList>
        </IonCardContent>
      </IonCard>
      <div className="flex justify-between py-8">
        <button 
          style={{ width: '105px', height: '40px' }}
          className="bg-[#E65C4F] text-black font-bold rounded-lg py-1"
          onClick={handleClear}
        >
          Limpiar
        </button>
        <button 
          style={{ width: '105px', height: '40px' }}
          className="bg-[#E65C4F] text-black font-bold rounded-lg py-1"
          onClick={handleSubmit}
        >
          Asignar
        </button>
      </div>
    </section>
  );
};

export default TeamFilter;