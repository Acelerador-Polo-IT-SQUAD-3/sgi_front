
import React, { useState } from 'react';
import { IonButton, IonList, IonGrid, IonRow, IonCol, IonAlert, useIonAlert, IonToast } from '@ionic/react';
import { Participant } from '../pages/UserList';


interface ParticipantTableProps {
  participants: Participant[];
  onEdit: (participant: Participant) => void;
  onDelete: (participant: Participant) => void;
}

const ParticipantTable: React.FC<ParticipantTableProps> = ({ participants, onEdit, onDelete }) => {

  const [presentAlert] = useIonAlert();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (participant: Participant) => {
    presentAlert({
      header: '¿Estas seguro que quieres eliminar a este usuario?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            onDelete(participant);
            setIsOpen(true)
          },
        },
      ],
      onDidDismiss: ({ detail }) => console.log(`Dismissed with role: ${detail.role}`),
    });
  };

  return (
    <IonList className='md:px-10 bg-transparent'>
      <IonGrid>
        <IonRow className='border rounded-sm border-gray-400'>
          <IonCol className='text-center'>Nombre</IonCol>
          <IonCol className='text-center'>Apellido</IonCol>
          <IonCol className='text-center'>Email</IonCol>
          <IonCol className='text-center'>Compañía</IonCol>
          <IonCol className='text-center'>Acción</IonCol>
        </IonRow>
        {participants.map((participant, index) => (
          <IonRow className='border-x-2 border-b rounded-sm border-gray-400 pt-2 flex items-center' key={index}>
            <IonCol className='w-1 text-center'>{participant.name}</IonCol>
            <IonCol className='w-1 text-center'>{participant.surname}</IonCol>
            <IonCol className='w-1 text-center'>{participant.email}</IonCol>
            <IonCol className='w-1 text-center'>{participant.company}</IonCol>
            <IonCol className='w-1 text-center'>
              <IonButton className='w-16 md:w-20' onClick={() => onEdit(participant)}>Editar</IonButton>
              <IonButton className='w-16 md:w-20' color="danger" onClick={() => handleDelete(participant)}>Eliminar</IonButton>

            </IonCol>
          </IonRow>
        ))}
      </IonGrid>

      <IonToast
          isOpen={isOpen}
          message="Se ha eliminado el usuario correctamente"
          onDidDismiss={() => setIsOpen(false)}
          duration={3000}
          color={"light"}
          className='text-center'
      ></IonToast>
    </IonList>
  );
};

export default ParticipantTable;
