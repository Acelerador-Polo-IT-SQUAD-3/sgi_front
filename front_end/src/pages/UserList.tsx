import { IonContent, IonPage, IonToast } from "@ionic/react";
import SearchFilters from "../components/searchFilters";
import { useState, useEffect } from "react";
import ParticipantTable from "../components/ParticipantTable";
import EditModal from "../components/EditModal";

export interface Participant {
  id: number;
  name: string;
  surname: string;
  email: string;
  company: string;
  dni?: string;
  description?: string;
  // password?: string;
}

const UserList: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null);
  const [filters, setFilters] = useState<{ role_id?: string; program_id?: string; technology_id?: string }>({});
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
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [filters]);

  const handleEdit = (participant: Participant) => {
    setEditingParticipant(participant);
  };

  const handleDelete = async (participant: Participant) => {
    try {
      const response = await fetch(`${apiUrl}/user/del/${participant.id}`, {
        method: 'PATCH'
      });

      if (response.ok) {
        setParticipants(participants.filter(p => p.id !== participant.id));
      } else {
        console.error('Error deleting participant:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting participant:', error);
    }
  };

  const handleSave = async (updatedParticipant: Participant) => {
    try {
      const response = await fetch(`${apiUrl}/user/${updatedParticipant.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedParticipant)
      });

      if (response.ok) {
        setParticipants(participants.map(p => p.id === updatedParticipant.id ? updatedParticipant : p));
        setIsOpen(true);
      } else {
        console.error('Error updating participant:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating participant:', error);
    }
  };

  const handleSearch = (filters: { role_id?: string; program_id?: string; technology_id?: string }) => {
    setFilters(filters);
  };

  const handleAddParticipant = () => {
    console.log('Add new participant');
    // Implementar lógica para agregar un nuevo participante
  };

  const handleCloseModal = () => {
    setEditingParticipant(null);
  };

  return (
    <IonContent>
      <section className="h-full flex flex-col">
        <SearchFilters onSearch={handleSearch} onAddParticipant={handleAddParticipant} />
        <ParticipantTable participants={participants} onEdit={handleEdit} onDelete={handleDelete} />
      </section>
      {editingParticipant && (
        <EditModal
          participant={editingParticipant}
          isOpen={true}
          onClose={handleCloseModal}
          onSave={handleSave}
        />
      )}
      <IonToast
          isOpen={isOpen}
          message="Se ha modificado el participante correctamente"
          onDidDismiss={() => setIsOpen(false)}
          duration={3000}
          color={"light"}
          className='text-center'
      ></IonToast>
    </IonContent>
  );
}

export default UserList;