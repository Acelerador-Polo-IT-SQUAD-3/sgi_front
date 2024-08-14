//Registra un usuario nuevo

import { IonPage,IonButton ,IonHeader,IonTitle, IonContent } from "@ionic/react";
import FormRegister from "../components/FormRegister";

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
            <IonContent>
               <FormRegister/> 
            </IonContent>           
        </IonPage>
    );
  };
  
  export default Register;