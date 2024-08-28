//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login

import { IonPage, IonHeader, IonTitle, IonButton, IonContent } from "@ionic/react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className=" bg-transparent flex items-stretch">
        <IonTitle>Polo IT</IonTitle>
        <IonButton className="h-8" fill="outline" routerLink='/login'>Iniciar Sesión</IonButton>
        <IonButton className="h-8 mr-5" routerLink='/signin'>Registrarse</IonButton>
      </IonHeader>
      <IonContent className="absolute top-0 left-0" fullscreen >
        <Carousel />
      </IonContent>
      <Footer />
    </IonPage >
  );
};

export default Welcome;