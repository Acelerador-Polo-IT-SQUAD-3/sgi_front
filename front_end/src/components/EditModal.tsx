import React, { useState } from 'react';
import { IonModal, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonInput, IonItem, IonLabel, IonList, IonFooter } from '@ionic/react';
import './ExploreContainer.css'
import { Participant } from '../pages/UserList';

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
  const [dni, setDni] = useState(participant.dni || '');
  const [description, setDescription] = useState(participant.description || '');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    const updatedParticipant = { ...participant, name, surname, email, company, dni, description };
    onSave(updatedParticipant);
    onClose();
  };

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onClose}>
      <IonHeader>
        <IonToolbar color={"light"}>
          <IonTitle>Editar Participante</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem color={"light"}>
            <IonLabel position="stacked">Nombre</IonLabel>
            <IonInput value={name} onIonChange={e => setName(e.detail.value!)} />
          </IonItem>
          <IonItem color={"light"}>
            <IonLabel position="stacked">Apellido</IonLabel>
            <IonInput value={surname} onIonChange={e => setSurname(e.detail.value!)} />
          </IonItem>
          <IonItem color={"light"}>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
          </IonItem>
          <IonItem color={"light"}>
            <IonLabel position="stacked">Compañía</IonLabel>
            <IonInput value={company} onIonChange={e => setCompany(e.detail.value!)} />
          </IonItem>
          <IonItem color={"light"}>
            <IonLabel position="stacked">DNI</IonLabel>
            <IonInput value={dni} onIonChange={e => setDni(e.detail.value!)} />
          </IonItem>
          <IonItem color={"light"}>
            <IonLabel position="stacked">Descripción</IonLabel>
            <IonInput value={description} onIonChange={e => setDescription(e.detail.value!)} />
          </IonItem>
          {/* <IonItem color={"light"}>
            <IonLabel position="stacked">Contraseña</IonLabel>
            <IonInput value={password} onIonChange={e => setPassword(e.detail.value!)} type="password" />
          </IonItem> */}
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

