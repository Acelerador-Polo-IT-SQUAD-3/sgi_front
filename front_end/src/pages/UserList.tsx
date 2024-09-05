import { IonContent, IonPage } from "@ionic/react";
import SearchFilters from "../components/searchFilters";
import { useState, useEffect } from "react";
import ParticipantTable from "../components/ParticipantTable";
import EditModal from "../components/EditModal";

interface Participant {
  id: number;
  name: string;
  surname: string;
  email: string;
  company: string;
}

const UserList: React.FC = () => {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [editingParticipant, setEditingParticipant] = useState<Participant | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/');
        const data = await response.json();

        const updatedParticipants = data.map((user: any, index: number) => ({
          ...user,
          company: `Company ${index + 1}`
        }));

        setParticipants(updatedParticipants);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (participant: Participant) => {
    setEditingParticipant(participant);
  };

  const handleDelete = async (participant: Participant) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${participant.id}`, {
        method: 'DELETE'
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
      const response = await fetch(`http://localhost:3000/user/${updatedParticipant.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedParticipant)
      });

      if (response.ok) {
        setParticipants(participants.map(p => p.id === updatedParticipant.id ? updatedParticipant : p));
      } else {
        console.error('Error updating participant:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating participant:', error);
    }
  };

  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // Implementar lógica de filtrado
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
    </IonContent>
  );
}

export default UserList;



