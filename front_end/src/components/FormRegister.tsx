import { IonInput, IonItem, IonLabel, IonButton  } from '@ionic/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function FormRegister() {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [dni,setDni] = useState<string>('');
    const [description,setDescription] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const history = useHistory();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => { // {React.FormEvent<HTMLFormElement}  Indica el tipo de parametro para event.
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/auth/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name,surname: lastName,dni,description,email: mail,password })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data)
            history.push('/login');
        } catch (error) {
            console.error('Error logging in:', error);
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
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
                        <IonItem lines="full" className='rounded-md'>
                            <IonInput
                                labelPlacement="floating"
                                label="DNI"
                                placeholder="23456789"
                                value={dni}
                                required
                                minlength={7}
                                onIonChange={(e) => setDni(e.detail.value!)} />
                        </IonItem>
                        <IonItem lines="full" className='rounded-md'>
                            <IonInput
                                labelPlacement="floating"
                                label="Descripción"
                                placeholder="Soy una descripción"
                                value={description}
                                required
                                minlength={3}
                                onIonChange={(e) => setDescription(e.detail.value!)} />
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