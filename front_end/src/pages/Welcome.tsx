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
    <IonPage color="tertiary">
      <Header buttons={headerButtons} activeSidebar={false}/>
        <IonContent className="absolute top-0 left-0 " fullscreen >
          <Carousel /> 
          <section className="p-10 bg-gray-300">
            <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-2 text-black">
              <div className="md:w-64 h-80 bg-white rounded-md">
                <p className="text-center">Ingresá a tu perfil</p>
              </div>
              <div className="md:w-64 h-80 bg-white rounded-md">
                <p className="text-center">Cursos</p>
              </div>
              <div  className="md:w-64 h-80 bg-white rounded-md">
                <p className="text-center">Lorem</p>
              </div>
              <div  className="md:w-64 h-80 bg-white rounded-md">
                <p className="text-center">Lorem</p>
              </div>
            </div>
          </section>
        </IonContent>
        <Footer />        
    </IonPage >
  );
};

export default Welcome;