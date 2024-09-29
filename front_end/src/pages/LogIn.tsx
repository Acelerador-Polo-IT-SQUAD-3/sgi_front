
//Conecta un usuario a la base de datos

import { IonPage } from "@ionic/react";
import React from 'react';
import FormLogin from "../components/FormLogin";

/* import Header from "../components/Header"; */

const Login: React.FC = () => {
    /*     const headerButtons = [
            { label: 'Inicio', routerLink: '/welcome' },
            { label: 'Registrarse', routerLink: '/signin' },
        ]; */

    return (
        <IonPage>

            <FormLogin />

        </IonPage>

    );
};

export default Login;