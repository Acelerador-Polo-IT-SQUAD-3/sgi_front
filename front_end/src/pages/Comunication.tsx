import { IonContent } from "@ionic/react";
import React, { useEffect, useState } from 'react';
import FormComunication from "../components/FormComunication";

const Comunication: React.FC = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [data, setData] = useState<Array<{
        user_id: number;
        user_name: string;
        user_email: string;
        team_names: string;
    }> | null>(null);

    useEffect(() => {
        const fetchData = async () => {

            const user = JSON.parse(sessionStorage.getItem('user') || '{}');
            const userId = user?.id;
            try {
                const response = await fetch(`${apiUrl}/teams/${userId}`);

                if (!response.ok) {
                    throw new Error('Error fetching data');
                }

                const result = await response.json();
                setData(result);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    return (
            <FormComunication data={data} />
    );
};

export default Comunication;