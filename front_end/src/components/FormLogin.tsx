
import { IonInput, IonItem, IonLabel, IonButton, IonCard, IonContent, IonRouterLink } from "@ionic/react";
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
            const apiUrl = import.meta.env.VITE_API_URL; //chequear URL//
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: username, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en la respuesta de la red');
            }

            const data = await response.json();
            sessionStorage.setItem('user', JSON.stringify(data.user));

            history.push('/home');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <section className='flex flex-col justify-center items-center h-screen bg-gray-50 relative'>


            <div className="circle1 bg-[#6FC3DF] opacity-20 absolute rounded-full w-[300px] h-[300px] top-[-50px] left-[-150px]"></div>
            <div className="circle2 bg-[#D19DB2] opacity-20 absolute rounded-full w-[450px] h-[450px] bottom-[-200px] right-[-100px]"></div>
            <div className="circle3 bg-[#A8D1F0] opacity-20 absolute rounded-full w-[350px] h-[350px] top-[200px] left-1/2 transform -translate-x-1/2"></div>
            <div className="circle4 bg-[#EBB3B6] opacity-20 absolute rounded-full w-[500px] h-[500px] bottom-[-250px] left-[-250px]"></div>



            <div className='bg-[#D1E6F8] rounded-xl p-8 shadow-md w-full max-w-md z-10'>
                <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='space-y-4'>

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
                    </div>
                    <div className='flex flex-col items-center'>
                        <button
                            className="w-full bg-[#E65C4F] text-black font-bold rounded-lg py-3"
                            type="submit"
                        >
                            Iniciar Sesión
                        </button>

                        {error && <IonLabel color="danger" className="mt-2">{error}</IonLabel>}

                        <IonLabel className="mt-4 text-sm">
                            ¿Todavía no tienes cuenta? <a href="/signin" className="text-black font-semibold hover:underline">Regístrate!</a>
                        </IonLabel>
                        <IonLabel className="mt-2 text-sm">
                            ¿Olvidaste tu contraseña? <a href="/reset-passwd" className="text-black font-semibold hover:underline">Recuperar cuenta.</a>
                        </IonLabel>

                    </div>
                </form >
            </div >
        </section >
    );
};

export default FormLogin;
