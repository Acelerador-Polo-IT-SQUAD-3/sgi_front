import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react';
import React, { useEffect, useState } from 'react';

interface FormComunicationProps {
    data: Array<{
        user_id: number;
        user_name: string;
        user_email: string;
        team_names: string;
    }> | null;
}

function FormComunication({ data }: FormComunicationProps) {
    const [affair, setAffair] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userData = {
            affair,
            message,
            selectedOptions,
        };

        try {
            const storedUser = JSON.parse(sessionStorage.getItem('user') || '{}');
            const userId = storedUser?.id;
            const apiUrl = import.meta.env.VITE_API_URL;

            const response = await fetch(`${apiUrl}/auth/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...userData, userId }), // Agrega userId al body
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en el registro');
            }

            const responseData = await response.json();
            console.log('Registro exitoso:', responseData);
        } catch (error) {
            console.error('Error al registrarse:', error);
        }
    };

    return (
        <section className='w-full px-10 bg-gray-50'>
            <h3 className='text-4xl font-bold mb-6 text-center text-gray-800'>Comunicación</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
                    <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg flex-grow w-[250px]'>
                        <IonLabel position="stacked" className='text-gray-600'>Selecciona los Email's</IonLabel>
                        <IonSelect
                            multiple={true}
                            value={selectedOptions}
                            onIonChange={(e: CustomEvent) => setSelectedOptions(e.detail.value)}
                        >
                            {data ? (
                                data.map(user => (
                                    <IonSelectOption key={user.user_id} value={user.user_email}>
                                        {`${user.user_name} - ${user.team_names}`}
                                    </IonSelectOption>
                                ))
                            ) : (
                                <IonSelectOption value="">Cargando...</IonSelectOption>
                            )}
                        </IonSelect>
                    </IonItem>

                    <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg flex-grow w-[250px]'>
                        <IonLabel position="stacked" className='text-gray-600'>Asunto</IonLabel>
                        <IonInput
                            placeholder="Ingresa el asunto"
                            value={affair}
                            required
                            minlength={3}
                            onIonChange={(e: CustomEvent) => setAffair(e.detail.value!)}
                        />
                    </IonItem>
                </div>

                <IonItem lines="none" className='bg-white border border-gray-400 rounded-lg'>
                    <IonLabel position="stacked" className='text-gray-600'>Mensaje</IonLabel>
                    <IonTextarea
                        className="h-40"
                        placeholder="Escriba el cuerpo del mensaje"
                        value={message}
                        required
                        onIonChange={(e: CustomEvent) => setMessage(e.detail.value!)}
                        onFocus={(e) => e.currentTarget.scrollTop = e.currentTarget.scrollHeight} 
                    />
                </IonItem>

                <div className='flex flex-row items-end justify-end space-x-2'>
                    <button
                        className="bg-[#E65C4F] text-black font-bold rounded-lg px-4 py-2"
                        type="submit"
                    >
                        Enviar
                    </button>

                    <button
                        className="bg-[#E65C4F] text-black font-bold rounded-lg px-4 py-2"
                        type="button"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </section>
    );
}

export default FormComunication;
