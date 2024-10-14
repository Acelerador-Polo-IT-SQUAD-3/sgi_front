import { IonInput, IonItem, IonLabel, IonSelect, IonSelectOption, IonTextarea, useIonToast } from '@ionic/react';
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
    const [present] = useIonToast();

    const clearForm = () => {
        setAffair('');
        setMessage('');
        setSelectedOptions([]);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const messageData = {
            affair,
            message,
            selectedOptions,
        };

        try {
            const storedUser = JSON.parse(sessionStorage.getItem('user') || '{}');
            const fromReception = storedUser?.email;
            const apiUrl = import.meta.env.VITE_API_URL;

            const response = await fetch(`${apiUrl}/teams/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...messageData, fromReception }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error en el envío del correoo');
            }

            const responseData = await response.json();
            console.log('Envío exitoso:', responseData);
            present({
                message: 'Email enviado correctamente',
                duration: 2000,
                color: 'success',
            });
            clearForm()
        } catch (error) {
            console.error('El error en el envío del correo:', error);
            present({
                message: 'Error al enviar el email. Intenta de nuevo.',
                duration: 2000,
                color: 'danger',
            });
        }
    };

    return (
        <section className='w-full px-10 bg-gray-50'>
            <h6 className='text-2xl font-bold mb-6 text-left text-gray-800'>Comunicación</h6>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
                    <IonItem lines="none" className='bg-white border border-gray-200 rounded-lg flex-grow w-[250px]'>
                        <IonLabel position="stacked" className='text-gray-600'>Selecciona los Email's</IonLabel>
                        <IonSelect
                            multiple={true}
                            value={selectedOptions}
                            onIonChange={(e: CustomEvent) => setSelectedOptions(e.detail.value)}
                            interface="popover"
                            labelPlacement="stacked"
                            placeholder="Seleccione receptores"               
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

                    <IonItem lines="none" className='bg-white border border-gray-200 rounded-lg flex-grow w-[250px]'>
                        <IonLabel position="stacked" className='text-gray-600'>Asunto</IonLabel>
                        <IonInput
                            placeholder="Ingresa el asunto"
                            value={affair}
                            minlength={3}
                            onIonChange={(e: CustomEvent) => setAffair(e.detail.value!)}
                        />
                    </IonItem>
                </div>

                <IonItem lines="none" className='bg-white border border-gray-200 rounded-lg'>
                    <IonLabel position="stacked" className='text-gray-600 mb-2'>Mensaje</IonLabel>
                    <IonTextarea
                        value={message}
                        onIonChange={(e: CustomEvent) => setMessage(e.detail.value!)}
                        placeholder="Ingrese su mensaje..."
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
                        className="bg-white border border-red-500 text-[#E65C4F] font-bold rounded-lg px-4 py-2"
                        type="button"
                        onClick={clearForm} 
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </section>
    );
}

export default FormComunication;