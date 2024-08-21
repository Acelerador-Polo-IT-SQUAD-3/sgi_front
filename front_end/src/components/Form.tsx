import { IonInput, IonItem, IonLabel, IonButton, IonList } from "@ionic/react";
import { Avatar } from "@mui/material";
import { useState, useEffect } from 'react';
import React from 'react';

const Form: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(username !== '' && password !== '');
    }, [username, password]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: username, password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Login successful:', data);
            //redirigir al usuario a otra página
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
            <IonItem lines="none" className="ion-padding">
                <Avatar></Avatar>
            </IonItem>
            <IonItem lines="full">
                <IonInput
                    labelPlacement="floating"
                    label="Correo electrónico"
                    placeholder="example@mail.com"
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)} />
            </IonItem>
            <IonItem lines="full">
                <IonInput
                    labelPlacement="floating"
                    label="Contraseña"
                    placeholder="********"
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)} />
            </IonItem>
            <IonItem lines="full" className="ion-padding items-center">
                <IonButton type="submit" disabled={!isFormValid}>Login</IonButton>
            </IonItem>
            {error && <IonLabel color="danger">{error}</IonLabel>}
            <IonLabel>
                ¿Todavía no tienes cuenta?{' '}
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

