import React from 'react';
import { IonButton, IonList, IonGrid, IonRow, IonCol } from '@ionic/react';

interface Participant {
  name: string;
  surname: string;
  email: string;
  company: string;
}

interface ParticipantTableProps {
  participants: Participant[];
  onEdit: (participant: Participant) => void;
  onDelete: (participant: Participant) => void;
}

const ParticipantTable: React.FC<ParticipantTableProps> = ({ participants, onEdit, onDelete }) => {
  return (
    <IonList className='px-10 bg-transparent'>
      <IonGrid>
        <IonRow className='border rounded-sm border-gray-400'>
          <IonCol>Nombre</IonCol>
          <IonCol>Apellido</IonCol>
          <IonCol>Email</IonCol>
          <IonCol>Compañía</IonCol>
          <IonCol>Acción</IonCol>
        </IonRow>
        {participants.map((participant, index) => (
          <IonRow className='border-x-2 border-b rounded-sm border-gray-400 pt-4' key={index}>
            <IonCol>{participant.name}</IonCol>
            <IonCol>{participant.surname}</IonCol>
            <IonCol>{participant.email}</IonCol>
            <IonCol>{participant.company}</IonCol>
            <IonCol>
              <IonButton size="small" onClick={() => onEdit(participant)}>Editar</IonButton>
              <IonButton size="small" color="danger" onClick={() => onDelete(participant)}>Eliminar</IonButton>
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </IonList>
  );
};

export default ParticipantTable;
