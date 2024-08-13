//Registra un usuario nuevo

import { IonPage,IonButton ,IonHeader,IonTitle } from "@ionic/react";

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader> 
                <IonTitle>SignIn</IonTitle>
                <IonButton routerLink="/home">Home</IonButton>
                <IonButton routerLink="/welcome">welcome</IonButton>
                <IonButton routerLink="/login">login</IonButton>
                <IonButton routerLink="/menu-and-nav">menu-and-nav</IonButton>
            </IonHeader>
        </IonPage>
    );
  };
  
  export default Register;