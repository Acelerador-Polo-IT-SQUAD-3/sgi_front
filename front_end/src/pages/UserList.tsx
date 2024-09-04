import { IonContent, IonPage } from "@ionic/react";
import SearchFilters from "../components/searchFilters";
import { useState, useEffect } from "react";
import ParticipantTable from "../components/ParticipantTable";

const UserList: React.FC = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/');
        const data = await response.json();

        const updatedParticipants = data.map((user : [], index : number) => ({
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

  const handleEdit = (participant: any) => {
    console.log('Edit participant:', participant);
    // Implementar lógica de edición
  };

  const handleDelete = (participant: any) => {
    console.log('Delete participant:', participant);
    setParticipants(participants.filter(p => p !== participant));
  };

  const handleSearch = (filters: any) => {
    console.log('Search filters:', filters);
    // Implementar lógica de filtrado
  };

  const handleAddParticipant = () => {
    console.log('Add new participant');
    // Implementar lógica para agregar un nuevo participante
  };

  return (
    <IonContent>
      <section className="h-full flex flex-col">
        <SearchFilters onSearch={handleSearch} onAddParticipant={handleAddParticipant} />
        <ParticipantTable participants={participants} onEdit={handleEdit} onDelete={handleDelete} />
      </section>
    </IonContent>
  );
}

export default UserList;
