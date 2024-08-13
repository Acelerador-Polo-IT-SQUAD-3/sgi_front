//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login

import { IonPage, IonHeader, IonTitle, IonButton } from "@ionic/react";

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
        </IonPage >
    );
  };

export default Welcome;