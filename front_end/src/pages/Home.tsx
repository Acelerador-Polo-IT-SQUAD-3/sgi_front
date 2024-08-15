//Dentro del perfil, una vez que el usuario haya logeado

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonTitle>Home</IonTitle>
        <IonButton routerLink="/welcome">Welcome</IonButton>
        <IonButton routerLink="/login">login</IonButton>
        <IonButton routerLink="/signin">signin</IonButton>
        <IonButton routerLink="/menu-and-nav">menu-and-nav</IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
