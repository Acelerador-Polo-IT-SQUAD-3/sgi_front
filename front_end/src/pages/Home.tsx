//Dentro del perfil, una vez que el usuario haya logeado

import { IonButton, IonContent, IonHeader, IonPage } from '@ionic/react';
import './Home.css';
import Carousel from '../components/Carousel';
import React from "react";
import { useHistory } from 'react-router-dom';


const Home: React.FC = () => {

  const history = useHistory();
  const handleUser = sessionStorage.getItem('user')
  const user = handleUser ? JSON.parse(handleUser) : null;


  if (!user) {
    history.push('/login')
    return null;
  }

  const handleLogout = () => {
    console.log(sessionStorage.getItem('user'))
    sessionStorage.removeItem('user');
    console.log(sessionStorage.getItem('user'))
    history.push('/login');
  };

  return (
    <IonPage>
      <IonHeader>
        <section className='flex items-center justify-between'>
          <div className='flex items-center'>
            <ul >
              <li className='ion-padding text-xs h-8'> ID:  {user.id}</li>
              <li className='ion-padding text-xs h-8'> Nombre: {user.name}</li>
            </ul>
            <ul>
              <li className='ion-padding text-xs h-8'> Apellido: {user.surname}</li>
              <li className='ion-padding text-xs h-8'> DNI: {user.dni}<br /></li>
            </ul>
            <ul>
              <li className='ion-padding text-xs h-8'> Descripción: {user.description}</li>
              <li className='ion-padding text-xs h-8'> Email: {user.email}</li>
            </ul>
          </div>
          <div className='ion-padding'>
            <IonButton routerLink="/menu-and-nav">Profile</IonButton>
            <IonButton onClick={handleLogout}>Log Out</IonButton>
          </div>
        </section>
      </IonHeader>

      <IonContent fullscreen>
        <Carousel />
      </IonContent>
    </IonPage>
  );
};

export default Home;
