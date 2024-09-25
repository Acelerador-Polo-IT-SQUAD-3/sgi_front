import React, { useState } from 'react'
import TeamFilter from '../components/TeamFilter'
import { IonContent, IonButton, IonAlert, IonToast } from '@ionic/react'

export interface Team {
  id: number
  name: string
  cantPersonas: string
}

const TeamList: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: "Java",
      cantPersonas: "2",
    },
    {
      id: 2,
      name: "UX/UI",
      cantPersonas: "5",
    }
  ])
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubmit, setIsOpenSubmit] = useState(false);

  const handleAddTeam = (newTeam: Team) => {
    setTeams([...teams, newTeam]);
  };

  const handleRemoveTeam = (id: number) => {
    setTeams(teams.filter(team => team.id !== id));
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    if (teams.length === 0) {
      alert('Debes agregar al menos una tecnología.');
      return;
    }

    for (const team of teams) {
      if (!team.name || !team.cantPersonas) {
        alert('Debes completar todos los campos.');
        return;
      }
    }

    try {
      const response = await fetch('URL_DEL_BACKEND', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teams),
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

