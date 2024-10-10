import { IonPage } from "@ionic/react";
import React from 'react';
import FormComunication from "../components/FormComunication";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Comunication: React.FC = () => {
    const headerButtons = [
        { label: 'Inicio', routerLink: '/welcome' },
        { label: 'Registrarse', routerLink: '/signin' },
    ];
    return (
        <IonPage>

            <Header buttons={headerButtons} activeSidebar={false} />
            <FormComunication />
            <Footer />

        </IonPage>

    );
};

export default Comunication;