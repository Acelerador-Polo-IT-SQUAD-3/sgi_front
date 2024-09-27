import { IonInput, IonItem, IonLabel, IonButton } from '@ionic/react';
import React, { useState } from 'react'

function FormRegister() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // {React.FormEvent<HTMLFormElement}  Indica el tipo de parametro para event.
        event.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Mail: ${mail}`)
        console.log(`Password: ${password}`);
    }

    return (
        <section className='flex flex-col justify-center items-center h-screen bg-gray-50'>
            <div className='bg-[#D1E6F8] rounded-xl p-8 shadow-md w-full max-w-md'>
                <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>¡Únete a nosotros!</h1>
                <form onSubmit={handleSubmit} className="space-y-4"  >
                    <div className='space-y-4'>
                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Nombre</IonLabel>
                            <IonInput
                                placeholder="Ingresa tu nombre completo"
                                value={name}
                                required
                                minlength={3}
                                onIonChange={(e) => setName(e.detail.value!)} />
                        </IonItem>

                        {/* Campo para el correo electrónico */}

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Correo electrónico</IonLabel>
                            <IonInput
                                type="email"
                                placeholder="nombre@correoelectronico.com"
                                value={mail}
                                required
                                onIonChange={(e) => setMail(e.detail.value!)} />
                        </IonItem>

                        {/* Campo para la contraseña */}

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Contraseña</IonLabel>
                            <IonInput
                                type="password"
                                placeholder="Introduce tu contraseña"
                                value={password}
                                required
                                minlength={8}
                                maxlength={12}
                                onIonChange={(e) => setPassword(e.detail.value!)} />
                        </IonItem>
                        <p className='text-xs text-gray-500'>Entre 8 y 12 caracteres</p>
                    </div>

                    {/* Botón de Registro */}

                    <div className='flex flex-col items-center'>
                        <IonButton className='w-full text-white bg-[#E65C4F] font-bold rounded-lg py-3' type="submit">
                            Regístrate
                        </IonButton>

                        {/* Enlace de inicio de sesión */}

                        <IonLabel className='text-sm text-gray-600 mt-4'>
                            ¿Ya tienes una cuenta?{' '}
                            <a href="/login" className="text-black font-semibold hover:underline">Inicia sesión</a>
                        </IonLabel>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormRegister;