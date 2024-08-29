//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login

import { IonPage,IonContent } from "@ionic/react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Welcome: React.FC = () => {
  const headerButtons = [
    { label: 'Iniciar Sesión', routerLink: '/login' },
    { label: 'Registrarse', routerLink: '/signin'},
  ];
  return (
    <IonPage>
      <Header buttons={headerButtons} activeSidebar={false}/>
      <IonContent className="absolute top-0 left-0" fullscreen >
        <Carousel />
      </IonContent>
      <Footer />
    </IonPage >
  );
};

export default Welcome;