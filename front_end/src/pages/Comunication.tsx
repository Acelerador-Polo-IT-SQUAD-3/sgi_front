import { IonPage } from "@ionic/react";
import React, { useEffect, useState } from 'react';
import FormComunication from "../components/FormComunication";
import Header from "../components/Header";
import { useHistory } from "react-router";

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
                console.log('Los datos que llegan son : ' + JSON.stringify(result));
                setData(result);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    const history = useHistory();
    const [role, setRole] = useState<any>(null);
  
    useEffect(() => {
      const handleUser = sessionStorage.getItem('user');
      if (handleUser) {
        const parsedUser = JSON.parse(handleUser);
        setRole(parsedUser.role_id);
      } else {
        history.push('/login');
      }
    }, [history]);
  

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('rol_id');
        history.push('/login');
      };

    const headerButtons = [
        { label: "Logout", onClick: handleLogout },
      ];
    

    return (
        <IonPage>
            <Header buttons={headerButtons} activeSidebar={true} />
            <FormComunication data={data} />
        </IonPage>
    );
};

export default Comunication;