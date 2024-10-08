
//Registra un usuario nuevo
import { IonPage, IonContent } from "@ionic/react";

import FormRegister from "../components/FormRegister";

import Header from "../components/Header";

const role = "usuario";


const Register: React.FC = () => {
    const headerButtons = [
        { label: 'Inicio', routerLink: '/welcome' },

        { label: 'Iniciar Sesión', routerLink: '/login' },
    ];
    return (
        <IonPage>
            <Header buttons={headerButtons} activeSidebar={false} role={role} />
            <IonContent>
                <FormRegister />
            </IonContent>
        </IonPage>
    );
};

export default Register;