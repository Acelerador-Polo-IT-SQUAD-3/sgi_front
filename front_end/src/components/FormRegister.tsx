import { IonInput, IonItem, IonLabel, IonButton  } from '@ionic/react';
import React, { useState } from 'react'

function FormRegister() {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { // {React.FormEvent<HTMLFormElement}  Indica el tipo de parametro para event.
        event.preventDefault();
        console.log(`Name: ${name}`);
        console.log(`Last Name: ${lastName}`)
        console.log(`Mail: ${mail}`)
        console.log(`Password: ${password}`);
    }
    return (
        <section className='flex flex-col justify-center items-center h-[100%]'>
            <div className='bg-slate-800 rounded-md p-10'>
                <h1 className='text-4xl mb-8'>Sign In</h1>
                <form onSubmit={handleSubmit} className=""  >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>              
                        <IonItem lines="full" className='rounded-md'>
                            <IonInput
                                labelPlacement="floating"
                                label="Nombre"
                                placeholder="pedro"
                                value={name}
                                required
                                minlength={3}
                                onIonChange={(e) => setName(e.detail.value!)} />
                        </IonItem>
                        <IonItem lines="full"className='rounded-md'>
                            <IonInput
                                labelPlacement="floating"
                                label="Apellido"
                                placeholder="lopez"
                                type="text"
                                value={lastName}
                                required
                                minlength={3}
                                onIonChange={(e) => setLastName(e.detail.value!)} />
                        </IonItem>
                        <IonItem lines="full"className='rounded-md border-1 border-black'>
                            <IonInput
                                labelPlacement="floating"
                                label="Correo electrónico"
                                placeholder="example@mail.com"
                                type="email"
                                value={mail}
                                required
                                onIonChange={(e) => setMail(e.detail.value!)} />
                        </IonItem>
                        <IonItem lines="full"className='rounded-md'>
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
                    </div> 
                    <div className='flex flex-col items-center gap-4 mt-4'>
                        <IonButton className='w-40 text-white font-medium' type="submit">Login</IonButton>
                        <IonLabel>
                            ¿Ya tienes cuenta?{' '}
                            <a href="/login">Iniciá Sesión!</a>
                        </IonLabel>
                    </div>            
                </form> 
            </div>                          
        </section>
    );
};

export default FormRegister