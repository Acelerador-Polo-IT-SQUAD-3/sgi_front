//Conecta un usuario a la base de datos

import { IonHeader, IonLabel, IonButton, IonPage, IonTitle, IonContent, IonToolbar, IonFooter, IonItem, IonCard } from "@ionic/react";
import React from 'react';
import Form from "../components/Form";

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="flex">
                    <IonTitle>Login</IonTitle>
                    <IonButton size='small' routerLink="/home">Home</IonButton>
                    <IonButton size='small' routerLink="/welcome">welcome</IonButton>
                    <IonButton size='small' routerLink="/signin">signin</IonButton>
                    <IonButton size='small' routerLink="/menu-and-nav">menu-and-nav</IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard className="ion-padding h-full flex justify-center items-center"  >
                    <Form></Form>
                </IonCard>
            </IonContent>
        </IonPage>

    );
};

export default Login;