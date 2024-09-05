import React, { useState } from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonList, IonFooter } from '@ionic/react';
import { Participant } from './ParticipantTable';
import './ExploreContainer.css'

interface EditModalProps {
  participant: Participant;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedParticipant: Participant) => void;
}

const EditModal: React.FC<EditModalProps> = ({ participant, isOpen, onClose, onSave }) => {
  const [name, setName] = useState(participant.name);
  const [surname, setSurname] = useState(participant.surname);
  const [email, setEmail] = useState(participant.email);
  const [company, setCompany] = useState(participant.company);

  const handleSave = () => {
    const updatedParticipant = { ...participant, name, surname, email, company };
    onSave(updatedParticipant);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Editar Participante</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Nombre</IonLabel>
            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Apellido</IonLabel>
            <IonInput value={surname} onIonChange={e => setSurname(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Compañía</IonLabel>
            <IonInput value={company} onIonChange={e => setCompany(e.detail.value!)} />
          </IonItem>
        </IonList>      
      </IonContent>
       <IonFooter className='flex justify-end'>    
        <IonButton onClick={onClose} color="danger">Cancelar</IonButton>
        <IonButton onClick={handleSave}>Confirmar</IonButton>
       </IonFooter>
    </IonModal>
  );
};

export default EditModal;
