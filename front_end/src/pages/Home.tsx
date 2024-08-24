//Dentro del perfil, una vez que el usuario haya logeado

import { IonButton, IonContent, IonFooter, IonHeader, IonItem, IonPage, IonTitle } from '@ionic/react';
import './Home.css';
import Carousel from '../components/Carousel';
import React, { useEffect, useState } from "react";
import { fetchUsers, User } from "../services/api";
import { useLocation } from 'react-router-dom';

interface LocationState {
  userData?: User;
}

const Home: React.FC = () => {


  const [users, setUsers] = useState<User[]>([]);
  const location = useLocation<LocationState>();
  useEffect(() => {
    const getUsers = async () => {
      const usersData = await fetchUsers();
      setUsers(usersData);
    };

    getUsers();
  }, []);

  const user = location.state;
  console.log(user.userData);

  return (
    <IonPage>
      <IonHeader className='flex justify-between'>
        <div>
          <IonTitle>Home</IonTitle>
          <IonButton routerLink="/welcome">Welcome</IonButton>
          <IonButton routerLink="/login">login</IonButton>
          <IonButton routerLink="/signin">signin</IonButton>
          <IonButton routerLink="/menu-and-nav">menu-and-nav</IonButton>
        </div>
        <div className='flex justify-between' key={user.userData?.id}>
            <div>
              <strong>ID:</strong> {user.userData?.id} <br/>
              <strong>Nombre:</strong> {user.userData?.name}<br/>
              <strong>Apellido:</strong> {user.userData?.surname}
            </div> 
            <div>
              <strong>DNI:</strong> {user.userData?.dni}<br/>
              <strong>Descripción:</strong> {user.userData?.description}<br/>
              <strong>Email:</strong> {user.userData?.email}
            </div>
        </div>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
      <IonFooter>
        <IonItem lines='none'>
          <IonButton>admin</IonButton>
          <IonButton>mentor</IonButton>
          <IonButton>mentee</IonButton>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};

export default Home;
