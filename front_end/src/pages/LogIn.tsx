//Conecta un usuario a la base de datos

import { IonHeader, IonButton, IonPage, IonTitle, IonContent, IonItem } from "@ionic/react";
import React from 'react';
import Form from "../components/Form";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonItem lines="none" className="flex items-stretch">
                    <IonTitle>Login</IonTitle>
                    <IonButton size='small' routerLink="/welcome">welcome</IonButton>
                    <IonButton size='small' routerLink="/signin">signin</IonButton>
                </IonItem>
            </IonHeader>
            <IonContent >
                <Form />
            </IonContent>
        </IonPage>

    );
};

export default Login;