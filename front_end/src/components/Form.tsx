
import { IonInput, IonItem, IonLabel, IonButton } from "@ionic/react";

import { useState } from 'react';
import React from 'react';

const Form: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // {React.FormEvent<HTMLFormElement}  Indica el tipo de parametro para event.
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <IonItem lines="none">
                <IonInput
                    labelPlacement="stacked"
                    label="Correo electrónico:"
                    placeholder="example@mail.com"
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)} />
            </IonItem>
            <IonItem>
                <IonInput
                    labelPlacement="stacked"
                    label="Contraseña:"
                    placeholder="********"
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)} />
            </IonItem>
            <IonButton type="submit">Login</IonButton>

            <IonLabel>
                ¿Todavia no tienes cuenta?{' '}
                <a href="/signin">Regístrate!</a>
            </IonLabel>
            <IonLabel>
                ¿Olvidaste tu contraseña?{' '}
                <a href="/reset-passwd">Recuperar cuenta.</a>
            </IonLabel>
        </form>
    );
};

export default Form;