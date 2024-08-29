import { IonContent,IonPage} from "@ionic/react"
import SearchFilters from "../components/searchFilters"
import { useState } from "react";
import ParticipantTable from "../components/ParticipantTable";

const UserList: React.FC = () => {
  const [participants, setParticipants] = useState([
    { name: 'Juan', surname: 'Pérez', email: 'juan@example.com', company: 'company A' },
    { name: 'María', surname: 'García', email: 'maria@example.com', company: 'company B' },
    { name: 'Carlos', surname: 'Rodríguez', email: 'carlos@example.com', company: 'company C' },
    { name: 'Ana', surname: 'López', email: 'ana@example.com', company: 'company D' },
    ]);

    
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
    <IonPage className="h-full flex justify-center ">
       <IonContent>
            <section className="h-full flex flex-col justify-center">
                <SearchFilters onSearch={handleSearch} onAddParticipant={handleAddParticipant} />
                <ParticipantTable participants={participants} onEdit={handleEdit} onDelete={handleDelete} />  
            </section>      
       </IonContent>
    </IonPage> 
  )
}

export default UserList