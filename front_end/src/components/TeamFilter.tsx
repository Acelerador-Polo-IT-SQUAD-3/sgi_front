import {
  IonButton,
  IonCol,
  IonGrid,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import React, { useState } from "react";
import { Team } from "../pages/TeamList";

interface TeamFilterProps {
  teams: Team[];
  onAddTeam: (team: Team) => void;
  onSubmit: () => void;
  onRemoveTeam: (id: number) => void;
}

const TeamFilter: React.FC<TeamFilterProps> = ({ teams, onAddTeam, onRemoveTeam, onSubmit }) => {
  const [program, setProgram] = useState<string | undefined>(undefined);
  const [technology, setTechnology] = useState<string | undefined>(undefined);
  const [maxTeams, setMaxTeams] = useState<string>("");
  const [personCount, setPersonCount] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleApply = () => {
    if (technology && personCount) {
      const isTechnologyExists = teams.some(team => team.name === technology);
      if (isTechnologyExists) {
        setError("La tecnología ya existe en la lista.");
        return;
      }
      const newTeam: Team = {
        id: teams.length + 1,
        name: technology,
        cantPersonas: personCount,
      };
      onAddTeam(newTeam);     
      setTechnology(undefined);
      setPersonCount("");
      setError(null);
    }
  };
  const handleSubmit = () => {
    if(program === undefined){
      return setError("Por favor, selecciona un programa.");
    }
    if(maxTeams === ""){
      return setError("Por favor, selecciona un maximo de equipos.");
    }
    onSubmit();
    setError(null);
  }

  return (
    <section className="px-2 mt-4 md:px-10 mb-4">
      <IonTitle className="p-0 mb-2">Filtros de busqueda</IonTitle>
      <IonList className="bg-transparent flex justify-between items-center">
        <IonItem lines="none" className="rounded-md ml-1" color={"dark"}>
          <IonSelect
            aria-label="Programas"
            placeholder="Programas"
            value={program}
            onIonChange={(e) => setProgram(e.detail.value)}
            className="w-32"
          >
            <IonSelectOption value="1">Programa 1</IonSelectOption>
            <IonSelectOption value="2">Programa 2</IonSelectOption>
            <IonSelectOption value="3">Programa 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem lines="none" className="rounded-md" color={"transparent"}>
          <IonLabel position="fixed" className="">
            Cantidad max. equipos
          </IonLabel>
          <IonInput
            value={maxTeams}
            onIonChange={(e) => setMaxTeams(e.detail.value!)}
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
            <IonCol>Configuración</IonCol>
          </IonRow>
          <IonRow className="border rounded-sm border-gray-400">
            <IonCol className="flex items-center gap-4">
              Área de conocimiento
              <IonSelect
                aria-label="Tecnologías"
                placeholder="Tecnologías"
                className="w-28"
                value={technology}
                onIonChange={(e) => setTechnology(e.detail.value)}
              >
                <IonSelectOption value="Java">Java</IonSelectOption>
                <IonSelectOption value="UX/UI">UX/UI</IonSelectOption>
                <IonSelectOption value="Node.js">Node.js</IonSelectOption>
              </IonSelect>
            </IonCol>
            <IonCol className="flex items-center gap-2">
              <IonLabel position="fixed"> Cantidad de personas </IonLabel>
              <IonInput
                value={personCount}
                onIonChange={(e) => setPersonCount(e.detail.value!)}
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
                <p>{team.name}</p>
              </IonCol>
              <IonCol className="flex justify-around">
                <p>{team.cantPersonas}</p>
                <IonButton color={"light"} className="w-16 md:w-20 h-10 self-end" onClick={() => onRemoveTeam(team.id)}>
                  Eliminar
                </IonButton>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      </IonList>
      <div className="flex justify-end">
        <IonButton color={'success'} onClick={handleSubmit}>Enviar</IonButton>        
      </div>

    </section>
  );
};

export default TeamFilter;


