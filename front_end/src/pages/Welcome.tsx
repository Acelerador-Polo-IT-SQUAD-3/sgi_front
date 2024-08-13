//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login

import { IonPage, IonHeader, IonTitle, IonButton, IonContent } from "@ionic/react";

const Welcome: React.FC = () => {
    return (
        <IonPage>
        <IonHeader>
                <IonTitle>Welcome</IonTitle>
                <IonButton routerLink="/home">Home</IonButton>
                <IonButton routerLink="/login">login</IonButton>
                <IonButton routerLink="/signin">signin</IonButton>
                <IonButton routerLink="/menu-and-nav">menu-and-nav</IonButton>
        </IonHeader>
        <IonContent>
          <div className="flex justify-center items-center h-[100%]">
            <p className="text-red-400">Welcome</p>
          </div>
        </IonContent>
        </IonPage >
    );
  };

export default Welcome;