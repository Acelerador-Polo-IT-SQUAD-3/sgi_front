import React, { useState } from 'react'
import TeamFilter from '../components/TeamFilter'
import { IonContent, IonButton, IonAlert, IonToast } from '@ionic/react'

export interface Team {
  id: number
  teamTechnologies: string
  reqQuantity: string
  mentorTechnologies: string
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([])
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubmit, setIsOpenSubmit] = useState(false);

  const handleAddTeam = (newTeam: Team) => {
    setTeams([...teams, newTeam]);
  };

  const handleRemoveTeam = (id: number) => {
    setTeams(teams.filter(team => team.id !== id));
    setIsOpen(true);
  };

  const handleSubmit = async (data: any) => {
    if (teams.length === 0) {
      alert('Debes agregar al menos una tecnología.');
      return;
    }

    for (const team of teams) {
      if (!team.teamTechnologies || !team.reqQuantity) {
        alert('Debes completar todos los campos.');
        return;
      }
    }
        try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/teams/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Datos enviados correctamente');
        setTeams([]);
        setIsOpenSubmit(true);
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
    finally{
      console.log(JSON.stringify(data))
    }
  };

  return (
    <IonContent>
      <section className="h-full flex flex-col">
        <TeamFilter teams={teams} onAddTeam={handleAddTeam} onRemoveTeam={handleRemoveTeam} onSubmit={handleSubmit} />
        <IonToast
          isOpen={isOpen}
          message="Se ha eliminado correctamente"
          onDidDismiss={() => setIsOpen(false)}
          duration={3000}
          color={"light"}
          className='text-center'
        ></IonToast>
        <IonToast
          isOpen={isOpenSubmit}
          message="Se ha enviado correctamente"
          onDidDismiss={() => setIsOpenSubmit(false)}
          duration={3000}
          color={"light"}
          className='text-center'
        ></IonToast>
      </section>
    </IonContent>
  )
}

export default TeamList;