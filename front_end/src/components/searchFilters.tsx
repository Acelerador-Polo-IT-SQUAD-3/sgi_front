import React, { useEffect, useState } from "react";
import {
  IonItem,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonButton,
} from "@ionic/react";
import { Button } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";

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
    <section className="px-2 mt-4 md:px-10 mb-4">
      <IonTitle className="p-0 mb-4">Filtros de búsqueda</IonTitle>
      <IonList className="bg-transparent flex justify-between">
        {/* Select para Roles */}
        <IonItem lines="none" className="rounded-md" color={"light"}>
          <IonSelect
            interface="popover"
            aria-label="Rol"
            placeholder="Rol"
            value={roleId}
            onIonChange={(e) => setRoleId(e.detail.value)}
            className="w-32"
          >
            {roles.map((role) => (
              <IonSelectOption key={role.id} value={role.id}>
                {role.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        {/* Select para Programas */}
        <IonItem lines="none" className="rounded-md" color={"light"}>
          <IonSelect
            interface="popover"
            aria-label="Curso/Proyecto"
            placeholder="Curso/Proyecto"
            value={programId}
            onIonChange={(e) => setProgramId(e.detail.value)}
            className="w-32"
          >
            {programs.map((program) => (
              <IonSelectOption key={program.id} value={program.id}>
                {program.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        {/* Select para Equipos */}
        <IonItem lines="none" className="rounded-md" color={"light"}>
          <IonSelect
            interface="popover"
            aria-label="Equipo"
            placeholder="Equipo"
            value={teamId}
            onIonChange={(e) => setTeamId(e.detail.value)}
            className="w-32"
          >
            {teams.map((team) => (
              <IonSelectOption key={team.id} value={team.id}>
                {team.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        {/* Select para Tecnologías */}
        <IonItem lines="none" className="rounded-md" color={"light"}>
          <IonSelect
            interface="popover"
             aria-label="Tecnología"
            placeholder="Tecnología"
            value={technologyId}
            onIonChange={(e) => setTechnologyId(e.detail.value)}
            className="w-32"
          >
            {technologies.map((technology) => (
              <IonSelectOption key={technology.id} value={technology.id}>
                {technology.name}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>

        <Button variant="contained" onClick={handleSearch}>
          Buscar
        </Button>
      </IonList>

      <div className="mt-4 flex justify-between">
        {userRole === 3 && (
          <IonButton routerLink="/profile/new-user" onClick={onAddParticipant}>
            Nuevo Participante
          </IonButton>
        )}
        <IonButton onClick={handleClearFilters}>Limpiar filtros</IonButton>
      </div>
    </section>
  );
};

export default SearchFilters;
