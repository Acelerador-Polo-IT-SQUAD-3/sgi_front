import { IonContent, IonToast } from "@ionic/react";
import SearchFilters from "../components/searchFilters";
import { useState, useEffect } from "react";
import ParticipantTable from "../components/ParticipantTable";

export interface Participant {
  id: number;
  name: string;
  surname: string;
  email: string;
  company: string;
  dni?: string;
  description?: string;
}

const UserList: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [filters, setFilters] = useState<{
    role_id?: string;
    program_id?: string;
    team_id?: string;
    technology_id?: string;
  }>({});
  const [isOpen, setIsOpen] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Filtrar los parámetros undefined
        const filteredParams = Object.fromEntries(
          Object.entries(filters).filter(([key, value]) => value !== undefined)
        );

        const queryParams = new URLSearchParams(filteredParams).toString();
        const response = await fetch(`${apiUrl}/user/?${queryParams}`);
        const data = await response.json();

        setParticipants(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filters]);

  const handleDelete = async (participant: Participant) => {
    try {
      const response = await fetch(`${apiUrl}/user/del/${participant.id}`, {
        method: "PATCH",
      });

      if (response.ok) {
        setParticipants(participants.filter((p) => p.id !== participant.id));
      } else {
        console.error("Error deleting participant:", response.statusText);
        alert("Error al eliminar el usuario, vuelve a intentarlo.");
      }
    } catch (error) {
      console.error("Error deleting participant:", error);
      alert("Error al eliminar el usuario, intentelo mas tarde.");
    }
  };

  const handleSearch = (filters: {
    role_id?: string;
    program_id?: string;
    team_id?: string;
    technology_id?: string;
  }) => {
    setFilters(filters);
  };

  const handleAddParticipant = () => {
    console.log("Add new participant");

    // Implementar lógica para agregar un nuevo participante
  };

  return (
    <IonContent>
      <section className="h-full flex flex-col page-background">
        <SearchFilters
          onSearch={handleSearch}
          onAddParticipant={handleAddParticipant}
        />
        <ParticipantTable
          participants={participants}
          onEdit={(participant) => {}}
          onDelete={handleDelete}
        />
        <IonToast
          isOpen={isOpen}
          message="Se ha modificado el participante correctamente"
          onDidDismiss={() => setIsOpen(false)}
          duration={3000}
          color={"light"}
          className="text-center"
        ></IonToast>
      </section>
    </IonContent>
  );
};

export default UserList;

