import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import React, { useState } from 'react';

function FormComunication() {
    const [affair, setAffair] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [selectedOptions, setSelectedOptions] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const userData = {
            affair,
            body,
            password,
            selectedOptions,
        };

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await fetch(`${apiUrl}/auth/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData.message || 'Error en el registrooo');
                throw new Error('Error en el registro');
            }

            const data = await response.json();
            console.log('Registro exitoso:', data);
        } catch (error) {
            console.error('Error al registrarse:', error);
        }

    };

    return (
        <section className='flex flex-col justify-center items-center h-screen bg-gray-50 relative'>

            <div className='bg-[#D1E6F8] rounded-xl p-8 shadow-md w-full max-w-md z-10'>
                <h3 className='text-4xl font-bold mb-6 text-center text-gray-800'>Comunicación</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className='space-y-4'>

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Selecciona opciones</IonLabel>
                            <IonSelect
                                multiple={true}
                                value={selectedOptions}
                                onIonChange={(e: CustomEvent) => setSelectedOptions(e.detail.value)}
                            >
                                <IonSelectOption value="opcion1">Opción 1</IonSelectOption>
                                <IonSelectOption value="opcion2">Opción 2</IonSelectOption>
                                <IonSelectOption value="opcion3">Opción 3</IonSelectOption>
                                <IonSelectOption value="opcion4">Opción 4</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Asunto</IonLabel>
                            <IonInput
                                placeholder="Ingresa el asunto"
                                value={affair}
                                required
                                minlength={3}
                            />
                        </IonItem>

                        <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                            <IonLabel position="stacked" className='text-gray-600'>Correo electrónico</IonLabel>
                            <IonTextarea
                                placeholder="Escriba el cuerpo del mensaje"
                                value={body}
                                required
                                onIonChange={(e: CustomEvent) => setBody(e.detail.value)} // Se eliminó el '!'
                            />
                        </IonItem>
                        <p className='text-xs text-gray-500'>(Entre 8 y 12 caracteres)</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <button
                            className="w-full bg-[#E65C4F] text-black font-bold rounded-lg py-3"
                            type="submit"
                        >
                            Enviar
                        </button>

                        <button
                            className="w-full bg-[#E65C4F] text-black font-bold rounded-lg py-3"
                            type="submit"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default FormComunication;
