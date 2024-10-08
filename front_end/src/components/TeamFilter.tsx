import {IonButton, IonCol,IonGrid,IonInput,IonItem,IonLabel,IonList,IonRow,IonSelect,IonSelectOption,IonTitle,} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Team } from "../pages/TeamList";
import { Program, Technology } from "../util/types"

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
    <section className="px-2 mt-4 md:px-10 mb-4">
      <IonTitle className="p-0 mb-2">Filtros de búsqueda</IonTitle>
      <IonList className="bg-transparent flex justify-between items-center">
        <IonItem lines="none" className="rounded-md ml-1" color={"dark"}>
          <IonSelect
            aria-label="Programas"
            placeholder="Programas"
            value={program}
            onIonChange={(e) => setProgram(e.detail.value)}
            className="w-32"
            
          >
            {programs.map((value) => {
              return (
                  <IonSelectOption key={value.id} value={value.id}>
                      {value.name} - {value.description}
                  </IonSelectOption>
              );
            })}
          </IonSelect>
        </IonItem>
        <IonItem lines="none" className="rounded-md" color={"transparent"}>
          <IonLabel position="fixed" className="">
            Cantidad max. equipos
          </IonLabel>
          <IonInput
            value={maxTeams}
            onIonChange={(e) => {
              const value = e.detail.value;
              if (value !== undefined && !isNaN(Number(value))) {
                setMaxTeams(Number(value));
              } else {
                setMaxTeams(undefined);
              }
            }}
            className="bg-slate-100 rounded-md"
          />
        </IonItem>
      </IonList>
      {error && (
        <div className="text-center">
          <IonLabel color="danger">{error}</IonLabel>
        </div>
      )}
      <IonList className="bg-transparent">
        <IonGrid>
          <IonRow className="border rounded-sm border-gray-400">
            <IonCol>Configuración de Graduados</IonCol>
          </IonRow>
          <IonRow className="border rounded-sm border-gray-400">
            <IonCol className="flex items-center gap-4">
              Área de conocimiento
              <IonSelect
                aria-label="Tecnologías"
                placeholder="Tecnologías"
                className="w-28"
                value={technology}
                onIonChange={(e) => {
                  setTechnology(technologies.find(tech => tech.id === e.detail.value))
                }}
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
              <IonLabel position="fixed"> Cantidad de personas </IonLabel>
              <IonInput
                value={personCount}
                onIonChange={(e) => {
                  const value = e.detail.value;
                  if (value !== undefined && !isNaN(Number(value))) {
                    setPersonCount(Number(value));
                  } else {
                    setPersonCount(undefined);
                  }
                }}
                className="bg-slate-100 rounded-md h-10"
              />
              <IonButton color={"light"} className="w-16 md:w-20 h-10" onClick={handleApply}>
                Agregar
              </IonButton>
            </IonCol>
          </IonRow>
          {teams.map((team, index) => (
            <IonRow key={index} className="border rounded-sm border-gray-400">
              <IonCol>
                <p>{team.teamTechnologies?.name}</p>
              </IonCol>
              <IonCol className="flex justify-around">
                <p>{team.reqQuantity}</p>
                <IonButton color={"light"} className="w-16 md:w-20 h-10 self-end" onClick={() => onRemoveTeam(team.id)}>
                  Eliminar
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonList>
      <IonList className="bg-transparent">
        <IonGrid>
          <IonRow className="border rounded-sm border-gray-400">
            <IonCol>Configuración de Mentores</IonCol>
          </IonRow>
          <IonRow className="border rounded-md border-gray-400">
            <IonCol>
              <IonSelect
                aria-label="Tecnologías de Mentores"
                placeholder="Selecciona las tecnologías de mentores"
                value={mentorTechnology}
                onIonChange={(e) => setMentorTechnology(e.detail.value)}
                multiple={true}
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
          </IonRow>
        </IonGrid>
      </IonList>
      <div className="flex justify-between">
        <IonButton onClick={handleClear}>Limpiar campos</IonButton>
        <IonButton color={'success'} onClick={handleSubmit}>Enviar</IonButton>
      </div>
    </section>
  );
};

export default TeamFilter;