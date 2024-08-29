import {IonPage, IonContent} from "@ionic/react";
import React from 'react';
import Form from "../components/Form";
import Header from "../components/Header";

const Login: React.FC = () => {
    const headerButtons = [
        { label: 'Inicio', routerLink: '/welcome' },
        { label: 'Registrarse', routerLink: '/signin'},
      ];
    return (
        <IonPage>
            <Header buttons={headerButtons} activeSidebar={false} />
            <IonContent >
                <Form />
            </IonContent>
        </IonPage>

    );
};

export default Login;