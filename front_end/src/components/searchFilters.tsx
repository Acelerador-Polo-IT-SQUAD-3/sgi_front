import React, { useEffect, useState } from "react";
import {
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonButton,
  IonGrid,
  IonCard,
  IonCol,
} from "@ionic/react";
import { Button } from "@mui/material";

interface SearchFiltersProps {
  onSearch: (filters: {
    role_id?: string;
    program_id?: string;
    team_id?: string;
    technology_id?: string;
  }) => void;
  onAddParticipant: () => void;
}

interface Role {
  id: string;
  name: string;
}

interface Program {
  id: string;
  name: string;
}

interface Team {
  id: string;
  name: string;
}

interface Technology {
  id: string;
  name: string;
}
const getRole = (user: string | null) => {
  if (user) {
    let u = JSON.parse(user); // Convierte el string de sessionStorage a objeto
    return u.role_id; // Devuelve el rol_id
  }
  return null;
};

const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSearch,
  onAddParticipant,
}) => {
  const [roleId, setRoleId] = useState<string | undefined>(undefined);
  const [programId, setProgramId] = useState<string | undefined>(undefined);
  const [technologyId, setTechnologyId] = useState<string | undefined>(
    undefined
  );
  const [teamId, setTeamId] = useState<string | undefined>(undefined);
  const user = sessionStorage.getItem("user");
  const userRole = getRole(user);

  // Estado para almacenar roles, programas, equipos, y tecnologías
  const [roles, setRoles] = useState<Role[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  const fetchRoles = async () => {
    try {
      const response = await fetch(`${apiUrl}/roles/`);
      const data = await response.json();
      setRoles(data);
    } catch (error) {
      console.error("Error al obtener los roles:", error);
    }
  };

  // Función para obtener programas
  const fetchPrograms = async () => {
    try {
      const response = await fetch(`${apiUrl}/prog/`);
      const data = await response.json();
      setPrograms(data);
    } catch (error) {
      console.error("Error al obtener los programas:", error);
    }
  };

  // Función para obtener equipos
  const fetchTeams = async () => {
    try {
      const response = await fetch(`${apiUrl}/teams/`);
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error("Error al obtener los equipos:", error);
    }
  };

  // Función para obtener tecnologías
  const fetchTechnologies = async () => {
    try {
      const response = await fetch(`${apiUrl}/tech/`);
      const data = await response.json();
      setTechnologies(data);
    } catch (error) {
      console.error("Error al obtener las tecnologías:", error);
    }
  };

  useEffect(() => {
    // Llamadas a las funciones para obtener todos los datos cuando el componente se monta
    fetchRoles();
    fetchPrograms();
    fetchTeams();
    fetchTechnologies();
  }, []);

  const handleSearch = () => {
    const filters = {
      role_id: roleId,
      program_id: programId,
      team_id: teamId,
      technology_id: technologyId,
    };
    onSearch(filters);
  };

  const handleClearFilters = () => {
    setRoleId(undefined);
    setProgramId(undefined);
    setTechnologyId(undefined);
    setTeamId(undefined);
    onSearch({});
  };

  return (
    <section className="mt-8 mx-16 mb-4 md:px-10 page-background">
      <IonTitle className="mb-6 text-base font-bold font-poppins">
        Gestión de participantes
      </IonTitle>
      <IonGrid className="bg-transparent grid auto-rows-auto grid-flow-row md:grid-flow-col w-full gap-4">
        <IonCol className="flex items-center p-0 m-0 h-8">
          {/* Select para Roles */}
            <IonSelect
              interface="popover"
              label="Rol"
              value={roleId}
              onIonChange={(e) => setRoleId(e.detail.value)}
              className="m-0 bg-white mr-2 px-4 rounded-lg text-sm"
            >
              {roles.map((role) => (
                <IonSelectOption key={role.id} value={role.id}>
                  {role.name}
                </IonSelectOption>
              ))}
            </IonSelect>

          {/* Select para Programas */}
          <IonSelect
            interface="popover"
            label="Programa"
            value={programId}
            onIonChange={(e) => setProgramId(e.detail.value)}
            className="m-0 bg-white mx-2 px-4 rounded-lg text-sm"
          >
            {programs.map((program) => (
              <IonSelectOption key={program.id} value={program.id}>
                {program.name}
              </IonSelectOption>
            ))}
          </IonSelect>

          {/* Select para Tecnologías */}
          <IonSelect
            interface="popover"
            label="Tecnología"
            value={technologyId}
            onIonChange={(e) => setTechnologyId(e.detail.value)}
            className="m-0 bg-white mx-2 px-4 rounded-lg text-sm"
          >
            {technologies.map((technology) => (
              <IonSelectOption key={technology.id} value={technology.id}>
                {technology.name}
              </IonSelectOption>
            ))}
          </IonSelect>

          {/* Select para Equipos */}
          <IonSelect
            interface="popover"
            label="Equipo"
            value={teamId}
            onIonChange={(e) => setTeamId(e.detail.value)}
            className="m-0 bg-white rounded-lg px-4 ml-2 text-sm"
          >
            {teams.map((team) => (
              <IonSelectOption key={team.id} value={team.id}>
                {team.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonCol>

        <IonCol className="flex items-center justify-end p-0 h-full m-0">
          <IonButton
            onClick={handleClearFilters}
            className="font-poppins normal-case text-sm"
            color={"danger"}
          >
            Limpiar filtros
          </IonButton>
          <IonButton
            onClick={handleSearch}
            className="font-poppins normal-case ml-4 text-sm"
            color={"danger"}
          >
            Buscar
          </IonButton>
        </IonCol>
      </IonGrid>
      <div className="h-8 mt-2 flex justify-between">
        {userRole === 3 && (
          <IonButton
            routerLink="/profile/new-user"
            onClick={onAddParticipant}
            size="small"
            className="font-poppins normal-case m-0 text-sm"
            color={"danger"}
          >
            Nuevo Participante
          </IonButton>
        )}
      </div>
    </section>
  );
};

export default SearchFilters;
