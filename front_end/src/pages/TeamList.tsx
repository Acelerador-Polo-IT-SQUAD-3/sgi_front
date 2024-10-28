import React, { useState } from 'react'
import TeamFilter from '../components/TeamFilter'
import { IonContent, IonToast } from '@ionic/react'
import '../theme/variables.css'

export interface Team {
  id: number
  teamTechnologies: any
  reqQuantity: number
  mentorTechnologies: string
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [toastMessage, setToastMessage] = useState<string|undefined>(undefined);

  const handleAddTeam = (newTeam: Team) => {
    setTeams([...teams, newTeam]);
  };

  const handleRemoveTeam = (id: number) => {
    setTeams(teams.filter(team => team.id !== id));
    setToastMessage('Se ha eliminado correctamente')
  };

  const handleSubmit = async (data: any) => {
    if (teams.length === 0) {
      setToastMessage('Debes agregar al menos una tecnología (Conocimientos por Graduado).')
      return;
    }

    for (const team of teams) {
      if (!team.teamTechnologies || !team.reqQuantity) {
        setToastMessage('Debes completar todos los campos.')
        return;
      }
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/user/get/user/tech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const data = await response.json();
        const teamNames =  data?.equipos_creados?.map((item: { equipo: string }) => item?.equipo).join(', ');
        const mentees =  data?.equipos_creados?.map((item: { mentor_asignado: any }) => item?.mentor_asignado?.name).join(', ');
        console.log('data: ',data)
        console.log('Datos enviados correctamente');
        setToastMessage(`Se ha ejecutado la asignación de equipos exitosamente. Equipos creados: ${teamNames}, Mentores: ${mentees}`)
        clearTeams()
      } else {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = JSON.parse(error.message);
        setToastMessage(errorMessage.message)
      } else {
        setToastMessage('Error inesperado')
      }
    } finally {
      console.log(JSON.stringify(data));
    }
  };
  const clearTeams=()=>{
    setTeams([]);
  }

  return (
    <IonContent className="page-background">
      <section className="h-full flex flex-col py-16 px-16 page-background">
        <TeamFilter 
          teams={teams} 
          onAddTeam={handleAddTeam} 
          onRemoveTeam={handleRemoveTeam} 
          onSubmit={handleSubmit} 
          clearTeams={clearTeams}
        />
        <IonToast
          isOpen={toastMessage!==undefined}
          message={toastMessage}
          onDidDismiss={() => setToastMessage(undefined)}
          duration={9000}
          color={"light"}
        ></IonToast>
      </section>
    </IonContent>
  )
}

export default TeamList;