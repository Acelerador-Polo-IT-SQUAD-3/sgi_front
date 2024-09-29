import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { useState } from 'react';

function FormRegister() {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Mail: ${mail}`);
        console.log(`Password: ${password}`);
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
                                required
                                minlength={3}
                                onIonChange={(e) => setName(e.detail.value!)} />
                        </IonItem>

                        {/* Campo de correo */}

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Correo electrónico</IonLabel>
                            <IonInput
                                type="email"
                                placeholder="nombre@correoelectronico.com"
                                value={mail}
                                required
                                onIonChange={(e) => setMail(e.detail.value!)} />
                        </IonItem>

                        {/*                         <IonItem lines="full">
                            <IonInput
                                labelPlacement="floating"
                                label="Correo electrónico"
                                placeholder="example@mail.com"
                                value={setName}
                                onIonChange={(e) => setUsername(e.detail.value!)} />
                        </IonItem> */}

                        {/* Campo de contraseña */}

                        {/*                         <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Contraseña</IonLabel>
                            <IonInput
                                type="password"
                                placeholder="Introduce tu contraseña"
                                value={password}
                                required
                                minlength={8}
                                maxlength={12}
                                onIonChange={(e) => setPassword(e.detail.value!)} />
                        </IonItem> */}


                        <IonItem lines="full">
                            <IonInput
                                labelPlacement="floating"
                                label="Contraseña"
                                placeholder="********"
                                type="password"
                                value={password}
                                onIonChange={(e) => setPassword(e.detail.value!)} />
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
