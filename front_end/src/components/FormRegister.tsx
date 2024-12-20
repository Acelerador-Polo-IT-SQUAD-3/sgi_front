import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';
import {
    IonToast
  } from "@ionic/react";
import { useHistory } from "react-router-dom";

function FormRegister() {
    const [surname, setSurname] = useState<string>('');
    const [name, setName] = useState<string>('');  // Define el tipo de estado
    const [email, setEmail] = useState<string>('');  // Define el tipo de estado
    const [password, setPassword] = useState<string>(''); // Define el tipo de estado
    const [errors, setErrors] = useState<{ name?: string; surname?: string; email?: string; password?: string }>({});
    const [isOpen, setIsOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const history = useHistory();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const apiUrl = import.meta.env.VITE_API_URL;
            
        setErrors({});
        const newErrors: { name?: string; surname?: string; email?: string; password?: string } = {};
    
        if (password.length === 0) {
            newErrors.password = "La contraseña es obligatoria";
        }
        if (name.trim() === '') {
            newErrors.name = "El nombre es obligatorio";
        }
        if (surname.trim() === '') {
            newErrors.surname = "El apellido es obligatorio";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            newErrors.email = "El correo electrónico no es válido";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        
            const userData = {
                name,
                email,
                password,
                surname,
            };
        
            try {
                const response = await fetch(`${apiUrl}/auth/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            });

                if (!response.ok) {
                    const errorData = await response.json(); // Captura el cuerpo de la respuesta
                    console.log(errorData.message || 'Error en el registrooo');
                    throw new Error('Error en el registro');
                    
                }
                
                const data = await response.json();
                console.log('Registro exitoso:', data);
                setIsOpen(true)
                setToastMessage('Graduado fue registrado exitosamente. Puedes ingresar con tus datos en la opción Inicio')
                setSurname('')
                setName('')
                setEmail('')
                setPassword('')
            } catch (error) {
                console.error('Error al registrarse:', error);
                setIsOpen(true)
                setToastMessage('Error en el registro')
            }
        
    };

    return (
        <section className='flex flex-col justify-center items-center h-screen bg-gray-50 relative'>

            {/* Círculos de fondo */}
            <div className="circle1 bg-[#6FC3DF] opacity-20 absolute rounded-full w-[300px] h-[300px] top-[-50px] left-[-150px]"></div>
            <div className="circle2 bg-[#D19DB2] opacity-20 absolute rounded-full w-[450px] h-[450px] bottom-[-200px] right-[-100px]"></div>
            <div className="circle3 bg-[#A8D1F0] opacity-20 absolute rounded-full w-[350px] h-[350px] top-[200px] left-1/2 transform -translate-x-1/2"></div>
            <div className="circle4 bg-[#EBB3B6] opacity-20 absolute rounded-full w-[500px] h-[500px] bottom-[-250px] left-[-250px]"></div>

            {/* Contenido del formulario */}
            <div className='bg-[#D1E6F8] rounded-xl p-8 shadow-md w-full max-w-md z-10'>
                <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>¡Únete a nosotros!</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='space-y-4'>

                        {/* Campo de nombre */}
                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Nombre</IonLabel>
                            <IonInput
                                placeholder="Ingresa tu nombre completo"
                                value={name}
                                minlength={3}
                                onIonChange={(e: CustomEvent) => setName(e.detail.value)} // Se eliminó el '!'
                            />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                        </IonItem>

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Apellido</IonLabel>
                            <IonInput
                                placeholder="Ingresa tu apellido"
                                value={surname}
                                minlength={3}
                                onIonChange={(e: CustomEvent) => setSurname(e.detail.value)} 
                            />
                            {errors.surname && <p className="text-red-500 text-xs">{errors.surname}</p>}
                        </IonItem>

                        {/* Campo de correo */}
                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Correo electrónico</IonLabel>
                            <IonInput
                                type="email"
                                placeholder="nombre@correoelectronico.com"
                                value={email}
                                onIonChange={(e: CustomEvent) => setEmail(e.detail.value)} // Se eliminó el '!'
                            />
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </IonItem>

                        {/* Campo de contraseña */}
                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Contraseña</IonLabel>
                            <IonInput
                                placeholder="********"
                                type="password"
                                value={password}
                                onIonChange={(e: CustomEvent) => setPassword(e.detail.value)} // Se eliminó el '!'
                            />
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </IonItem>
                        <p className='text-xs text-gray-500'>(Entre 8 y 12 caracteres)</p>
                    </div>

                    {/* Botón de registro */}
                    <div className='flex flex-col items-center'>
                        <button
                            className="w-full bg-[#E65C4F] text-black font-bold rounded-lg py-3"
                            type="submit"
                        >
                            Regístrate
                        </button>

                        {/* Enlace de inicio de sesión 
                        <IonLabel className='text-sm text-gray-600 mt-4'>
                            ¿Ya tienes una cuenta?{' '}
                            <a href="/login" className="text-black font-semibold hover:underline">Inicia sesión</a>
                        </IonLabel>*/}
                    </div>
                </form>
            </div>
            <IonToast
                isOpen={isOpen}
                message={toastMessage}
                onDidDismiss={() => setIsOpen(false)}
                duration={6000}
                color={"light"}
                className="text-center"
            ></IonToast>
        </section>
    );
}

export default FormRegister;
