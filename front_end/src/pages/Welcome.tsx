//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login

import { IonPage, IonHeader, IonTitle, IonButton, IonContent, IonToolbar, IonCard, IonItem } from "@ionic/react";
import Carousel from "../components/Carousel";


const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="bg-transparent">
        <IonTitle>Polo IT</IonTitle>
        <IonButton size='small' routerLink='/login'>Iniciar Sesión</IonButton>
        <IonButton size='small' routerLink='/signin'>Registrarse</IonButton>
      </IonHeader>
      <IonContent className="absolute top-0 left-0" fullscreen >
         <Carousel/>
      </IonContent>
    </IonPage >
  );
};

export default Welcome;