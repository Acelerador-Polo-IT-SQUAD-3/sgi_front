//Conecta un usuario a la base de datos

import { IonHeader, IonButton, IonPage, IonTitle, IonContent, IonToolbar, IonFooter, IonItem } from "@ionic/react";
import React from 'react';
import Form from "../components/Form";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                    <IonButton routerLink="/home">Home</IonButton>
                    <IonButton routerLink="/welcome">welcome</IonButton>
                    <IonButton routerLink="/signin">signin</IonButton>
                    <IonButton routerLink="/menu-and-nav">menu-and-nav</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <Form></Form>
            </IonContent>
        </IonPage>

    );
};

export default Login;