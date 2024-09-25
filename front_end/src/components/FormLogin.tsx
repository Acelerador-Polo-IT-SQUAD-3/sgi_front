import { IonInput, IonItem, IonLabel, IonButton, IonCard, IonContent, IonRouterLink } from "@ionic/react";
import { Avatar } from "@mui/material";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const FormLogin: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isFormValid, setIsFormValid] = useState(false);
    const history = useHistory();

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
            sessionStorage.setItem('user', JSON.stringify(data.user));
            //redirigir al usuario a otra página
            history.push('/home');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-full" >
            <div className="flex flex-col justify-center items-center ion-padding bg-gray-200 rounded-md">
                <IonItem lines="none" className="flex item-center" color={"transparent"}>
                    <Avatar className="ion-margin"></Avatar>
                </IonItem>
                <IonItem lines="full" color={"transparent"}>
                    <IonInput
                        labelPlacement="floating"
                        label="Correo electrónico"
                        placeholder="example@mail.com"
                        value={username}
                        required
                        minlength={4}
                        onIonChange={(e) => setUsername(e.detail.value!)} />
                </IonItem>
                <IonItem lines="full" color={"transparent"} className="!border-none !border-b-0">
                    <IonInput
                        labelPlacement="floating"
                        label="Contraseña"
                        placeholder="********"
                        type="password"
                        value={password}
                        required
                        minlength={4}
                        onIonChange={(e) => setPassword(e.detail.value!)} />
                </IonItem>
                <IonItem lines="full" className="items-center" color={"transparent"}>
                    <IonButton type="submit" disabled={!isFormValid}>Login</IonButton>
                </IonItem>
                {error && <IonLabel color="danger">{error}</IonLabel>}
                <IonLabel className="ion-margin">
                    ¿Todavía no tienes cuenta?{' '}
                    <IonRouterLink routerLink="/signin">Regístrate!</IonRouterLink>
                </IonLabel>
                <IonLabel className="ion-margin">
                    ¿Olvidaste tu contraseña?{' '}
                    <IonRouterLink routerLink="/reset-passwd">Recuperar cuenta.</IonRouterLink>
                </IonLabel>
            </div>
        </form>
    );
};

export default FormLogin;

