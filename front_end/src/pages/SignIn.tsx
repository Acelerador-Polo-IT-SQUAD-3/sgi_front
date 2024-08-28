//Registra un usuario nuevo

import { IonPage, IonButton, IonHeader, IonTitle, IonContent, IonItem } from "@ionic/react";
import FormRegister from "../components/FormRegister";

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonItem lines="none" className="flex items-stretch">
                    <IonTitle>SignIn</IonTitle>
                    <IonButton routerLink="/welcome">welcome</IonButton>
                    <IonButton routerLink="/login">login</IonButton>
                </IonItem>
            </IonHeader>
            <IonContent>
                <FormRegister />
            </IonContent>
        </IonPage>
    );
};

export default Register;