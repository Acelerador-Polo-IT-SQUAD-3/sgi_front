import React, { useState } from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonTitle, IonButton } from '@ionic/react';
import { Button } from '@mui/material';

interface SearchFiltersProps {
  onSearch: (filters: { role_id?: string; program_id?: string; team_id?: string; technology_id?: string }) => void;
  onAddParticipant: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onAddParticipant }) => {
  const [roleId, setRoleId] = useState<string | undefined>(undefined);
  const [programId, setProgramId] = useState<string | undefined>(undefined);
  const [technologyId, setTechnologyId] = useState<string | undefined>(undefined);
  const [teamId, setTeamId] = useState<string | undefined>(undefined);

  const handleSearch = () => {
    const filters = {
      role_id: roleId,
      program_id: programId,
      team_id: teamId,
      technology_id: technologyId,
    };
    onSearch(filters);
  };

  const handleClearFilters = () => {
    setRoleId(undefined);
    setProgramId(undefined);
    setTechnologyId(undefined);
    setTeamId(undefined);
    onSearch({});
  };

  return (
    <section className="px-2 mt-4 md:px-10 mb-4">
      <IonTitle className='p-0 mb-4'>Filtros de busqueda</IonTitle>
      <IonList className="bg-transparent flex justify-between">
        <IonItem lines='none' className="rounded-md" color={'dark'}>
          <IonSelect
            aria-label="Rol"
            placeholder="Rol"
            value={roleId}
            onIonChange={(e) => setRoleId(e.detail.value)}
            className="w-32"
          >
            <IonSelectOption value="1">Role 1</IonSelectOption>
            <IonSelectOption value="2">Role 2</IonSelectOption>
            <IonSelectOption value="3">Role 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem lines='none' className="rounded-md" color={'dark'}>
          <IonSelect
            aria-label="Curso/Proyecto"
            placeholder="Curso/Proyecto"
            value={programId}
            onIonChange={(e) => setProgramId(e.detail.value)}
            className="w-32"
          >
            <IonSelectOption value="1">Program 1</IonSelectOption>
            <IonSelectOption value="2">Program 2</IonSelectOption>
            <IonSelectOption value="3">Program 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem lines='none' className="rounded-md" color={'dark'}>
          <IonSelect
            aria-label="Equipo"
            placeholder="Equipo"
            value={teamId}
            onIonChange={(e) => setTeamId(e.detail.value)}
            className="w-32"
          >
            <IonSelectOption value="1">Team 1</IonSelectOption>
            <IonSelectOption value="2">Team 2</IonSelectOption>
            <IonSelectOption value="3">Team 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem lines='none' className="rounded-md" color={'dark'}>
          <IonSelect
            aria-label="Tecnología"
            placeholder="Tecnología"
            value={technologyId}
            onIonChange={(e) => setTechnologyId(e.detail.value)}
            className="w-32"
          >
            <IonSelectOption value="1">Technology 1</IonSelectOption>
            <IonSelectOption value="2">Technology 2</IonSelectOption>
            <IonSelectOption value="3">Technology 3</IonSelectOption>
          </IonSelect>
        </IonItem>
        <Button variant="contained" onClick={handleSearch}>Buscar</Button>
      </IonList>
      <div className='mt-4 flex justify-between'>
        <IonButton routerLink='/profile/new-user' onClick={onAddParticipant}>Nuevo Participante</IonButton>
        <IonButton onClick={handleClearFilters}>Limpiar filtros</IonButton>
      </div>
    </section>
  );
};

export default SearchFilters;





