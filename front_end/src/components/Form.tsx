import { IonInput, IonItem, IonLabel, IonButton, IonCard } from "@ionic/react";
import { Avatar } from "@mui/material";
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Form: React.FC = () => {
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
            <IonCard className="flex flex-col justify-center items-center ion-padding">
                <IonItem lines="none"  className="flex item-center">
                    <Avatar className="ion-margin"></Avatar>
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
                <IonItem lines="full" className="items-center">
                    <IonButton type="submit" disabled={!isFormValid}>Login</IonButton>
                </IonItem>
                {error && <IonLabel color="danger">{error}</IonLabel>}
                <IonLabel className="ion-margin">
                    ¿Todavía no tienes cuenta?{' '}
                    <a href="/signin">Regístrate!</a>
                </IonLabel>
                <IonLabel className="ion-margin">
                    ¿Olvidaste tu contraseña?{' '}
                    <a href="/reset-passwd">Recuperar cuenta.</a>
                </IonLabel>
            </IonCard>

        </form>
    );
};

export default Form;

