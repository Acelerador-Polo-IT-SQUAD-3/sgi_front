import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonInput,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonItem,
  IonButton,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { Team } from "../pages/TeamList";
import { Program, Technology } from "../util/types";
import { trash } from "ionicons/icons";

interface TeamFilterProps {
  teams: Team[];
  onAddTeam: (team: Team) => void;
  onSubmit: (data: any) => void;
  onRemoveTeam: (id: number) => void;
  clearTeams: () => void;
}

const TeamFilter: React.FC<TeamFilterProps> = ({
  teams,
  onAddTeam,
  onRemoveTeam,
  onSubmit,
  clearTeams,
}) => {
  const [program, setProgram] = useState<string | undefined>(undefined);
  const [technology, setTechnology] = useState<number | undefined>(undefined);
  const [maxTeams, setMaxTeams] = useState<number | undefined>(undefined);
  const [personCount, setPersonCount] = useState<number | undefined>(undefined);
  const [mentorTechnology, setMentorTechnology] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const handleApply = () => {
    if (technology && personCount) {
      const isTechnologyExists = teams.some(
        (team) => team.teamTechnologies === technology
      );
      if (isTechnologyExists) {
        setError("La tecnología ya existe en la lista.");
        return;
      }
      const newTeam: Team = {
        id: teams.length + 1,
        teamTechnologies: technologies.find((tech) => tech.id === technology),
        reqQuantity: personCount,
        mentorTechnologies: mentorTechnology.join(","),
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
        ids_tecnologias: teams.map((team) => team.teamTechnologies?.id),
        cantidad_requerida: teams.map((team) => Number(team.reqQuantity)),
      },
      conocimientos_por_mentor: mentorTechnology.map((tech) => Number(tech)),
    };

    onSubmit(data);
    setError(null);
  };

  const fetchSelect = async (setArray: any, serviceName: string) => {
    try {
      const response = await fetch(`${apiUrl}/${serviceName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Error al obtener los roles");
      }
      const data = await response.json();
      setArray(data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };
  useEffect(() => {
    fetchSelect(setPrograms, "prog");
    fetchSelect(setTechnologies, "tech");
  }, []);

  const handleClear = () => {
    clearTeams();
    setProgram(undefined);
    setTechnology(undefined);
    setMaxTeams(undefined);
    setPersonCount(undefined);
    setMentorTechnology([]);
    setError(null);
  };

  return (
    <section className="px-2">
      <IonTitle className="p-0 mb-4 font-bold font-poppins text-sm">
        Asignación de equipos
      </IonTitle>
      <IonGrid>
        <IonRow className="mb-2 h-4 w-full flex justify-end items-center">
          <IonCol size="4" className="p-0 pl-32 m-0">
            <IonLabel className="text-[12px] m-0">Cantidad de equipos</IonLabel>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="4" className="flex items-center pr-32 p-0 m-0 h-8">
            <IonItem
              lines="none"
              className="h-full p-0 m-0 w-full flex items-center rounded-md mr-2 shadow-md"
            >
              <IonSelect
                interface="popover"
                label="Programa"
                value={program}
                onIonChange={(e) => setProgram(e.detail.value)}
                className="rounded-md bg-transparent"
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
          </IonCol>
          <IonCol size="4" className="flex items-center px-16 p-0 m-0 h-8">
            <IonItem
              lines="none"
              className="h-full p-0 m-0 w-full flex items-center rounded-md mr-2 shadow-md"
            >
              <IonSelect
                interface="popover"
                label="Conocimiento del mentor"
                value={mentorTechnology}
                onIonChange={(e) => setMentorTechnology(e.detail.value)}
                multiple={true}
                className="rounded-md bg-transparent text-sm]"
              >
                {technologies.map((value) => {
                  return (
                    <IonSelectOption key={value.id} value={value.id}>
                      {value.name}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonItem>
          </IonCol>
          <IonCol size="4" className="flex items-center p-0 pl-32 m-0 h-8">
            <IonItem
              lines="none"
              className="h-full p-0 m-0 w-full flex items-center rounded-md mr-2 shadow-md"
            >
              <IonInput
                type="number"
                min={1}
                max={200}
                value={maxTeams}
                onIonChange={(e) => {
                  const value = e.detail.value;
                  if (value !== undefined && !isNaN(Number(value))) {
                    setMaxTeams(Number(value));
                  } else {
                    setMaxTeams(undefined);
                  }
                }}
                className="bg-transparent"
              />
            </IonItem>
          </IonCol>
        </IonRow>
      </IonGrid>
      {error && (
        <div className="text-center">
          <IonLabel color="danger">{error}</IonLabel>
        </div>
      )}
      <br />
      <IonTitle className="p-0 mb-4 font-bold font-poppins text-sm">
        Configuración
      </IonTitle>
      <IonCard className="bg-white py-4 px-24">
        <IonCardContent className="bg-transparent">
          <IonList className="bg-transparent">
            <IonGrid>
              <IonRow className="mb-4 h-4 w-full flex justify-center items-center">
                <IonCol size="4" className="px-16 m-0">
                  <IonLabel className="text-[12px] m-0 text-black">
                    Cantidad de personas
                  </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol
                  size="4"
                  className="flex items-center pr-32 p-0 m-0 h-8"
                >
                  <IonItem
                    lines="none"
                    className="h-full p-0 m-0 w-full flex items-center rounded-md mr-2 shadow-md"
                  >
                    <IonSelect
                      interface="popover"
                      label="Conocimiento de graduados"
                      value={technology}
                      onIonChange={(e) => setTechnology(e.detail.value)}
                      className="bg-"
                    >
                      {technologies.map((value) => {
                        return (
                          <IonSelectOption key={value.id} value={value.id}>
                            {value.name}
                          </IonSelectOption>
                        );
                      })}
                    </IonSelect>
                  </IonItem>
                </IonCol>
                <IonCol
                  size="4"
                  className="flex items-center p-0 px-16 m-0 h-8"
                >
                  <IonItem
                    lines="none"
                    className="h-full p-0 m-0 w-full flex items-center rounded-md mr-2 shadow-md"
                  >
                    <IonInput
                      type="number"
                      min={1}
                      max={200}
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
                      className="bg-transparent"
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="4" className="h-full p-0 m-0 flex justify-center">
                  <IonButton
                    fill="clear"
                    className="bg-[#E65C4F] text-black normal-case font-bold rounded-lg py-1 p-0 m-0"
                    onClick={handleApply}
                  >
                    Agregar
                  </IonButton>
                </IonCol>
              </IonRow>
              {teams.map((team, index) => (
                <IonRow key={index}>
                  <IonItem className="w-full flex items-center">
                    <IonCol size="4" className="p-0 m-0 w-full my-4">
                      <p>{team.teamTechnologies?.name}</p>
                    </IonCol>
                    <IonCol  size="4" className="my-4 flex items-center">
                      <p className="w-full text-center">{team.reqQuantity}</p>
                    </IonCol>
                    <IonCol  size="4" className="my-4 flex items-center">
                      <IonIcon
                        icon={trash}
                        size="large"
                        style={{ color: "#D8434380" }}
                        onClick={() => onRemoveTeam(team.id)}
                        className="w-full"
                      ></IonIcon>
                    </IonCol>
                  </IonItem>
                </IonRow>
              ))}
            </IonGrid>
          </IonList>
        </IonCardContent>
      </IonCard>
      <div className="flex justify-between py-8">
        <button
          style={{ width: "105px", height: "40px" }}
          className="bg-[#E65C4F] text-black font-bold rounded-lg py-1"
          onClick={handleClear}
        >
          Limpiar
        </button>
        <button
          style={{ width: "105px", height: "40px" }}
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
