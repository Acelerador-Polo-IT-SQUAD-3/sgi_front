//Dentro del perfil, una vez que el usuario haya logeado

import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Polo IT</IonTitle>
          <IonButton size='small' routerLink='/login'>Iniciar Sesión</IonButton>
          <IonButton size='small' routerLink='/signin'>Registrarse</IonButton>
        </IonToolbar>
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
