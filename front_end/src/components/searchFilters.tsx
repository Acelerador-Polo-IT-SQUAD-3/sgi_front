import React, { useState } from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonTitle } from '@ionic/react';
import { Button } from '@mui/material';
import './admin.css';

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
    <div className="font-poppins text-lg">
      <section className="px-2 mt-4 md:px-10 mb-4 bg-[#FFF4EA]">
        <IonTitle className='p-0 mb-4' style={{ fontSize: '1rem' }}>Gestión de Participantes</IonTitle>
        <IonList className="bg-transparent flex justify-center flex-wrap">
          <div className="flex items-center space-x-2 mb-4">


            <IonItem lines='none' className="rounded-md" color={'white'}>
              <IonSelect
                aria-label="Rol"
                placeholder="Rol"
                value={roleId}
                onIonChange={(e) => setRoleId(e.detail.value)}
                className="w-32 bg-white font-poppins text-black text-sm "
                style={{
                  borderRadius: '10px',
                  border: '1px solid black',
                  padding: '3px 30px',
                }}
              >
                <IonSelectOption value="1">Role 1</IonSelectOption>
                <IonSelectOption value="2">Role 2</IonSelectOption>
                <IonSelectOption value="3">Role 3</IonSelectOption>
              </IonSelect>
            </IonItem>


            <IonItem lines='none' className="rounded-md" color={'white'}>
              <IonSelect
                aria-label="Curso/Proyecto"
                placeholder="Curso/Proyecto"
                value={programId}
                onIonChange={(e) => setProgramId(e.detail.value)}
                className="w-32 bg-white font-poppins text-black text-sm "
                style={{
                  borderRadius: '10px',
                  border: '1px solid black',
                  padding: '3px 30px',
                }}
              >
                <IonSelectOption value="1">Program 1</IonSelectOption>
                <IonSelectOption value="2">Program 2</IonSelectOption>
                <IonSelectOption value="3">Program 3</IonSelectOption>
              </IonSelect>
            </IonItem>


            <IonItem lines='none' className="rounded-md" color={'white'}>
              <IonSelect
                aria-label="Equipo"
                placeholder="Equipo"
                value={teamId}
                onIonChange={(e) => setTeamId(e.detail.value)}
                className="w-32 bg-white font-poppins text-black text-sm s"
                style={{
                  borderRadius: '10px',
                  border: '1px solid black',
                  padding: '3px 30px',
                }}
              >
                <IonSelectOption value="1">Team 1</IonSelectOption>
                <IonSelectOption value="2">Team 2</IonSelectOption>
                <IonSelectOption value="3">Team 3</IonSelectOption>
              </IonSelect>
            </IonItem>


            <IonItem lines='none' className="rounded-md" color={'white'}>
              <IonSelect
                aria-label="Tecnología"
                placeholder="Tecnología"
                value={technologyId}
                onIonChange={(e) => setTechnologyId(e.detail.value)}
                className="w-22 bg-white font-poppins text-black text-sm "
                style={{
                  borderRadius: '10px',
                  border: '1px solid black',
                  padding: '3px 30px',
                }}
              >
                <IonSelectOption value="1">Technology 1</IonSelectOption>
                <IonSelectOption value="2">Technology 2</IonSelectOption>
                <IonSelectOption value="3">Technology 3</IonSelectOption>
              </IonSelect>
            </IonItem>
          </div>

          <div className="flex space-x-2">

            {/* Botón Buscar */}

            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                backgroundColor: '#E65C4F',
                color: 'black',
                borderRadius: '10px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                padding: '3px 10px',
                '&:hover': {
                  backgroundColor: '#d9534f',
                },
              }}
              className="font-poppins"
            >
              Buscar
            </Button>

            {/* Botón Limpiar Filtros */}

            <Button
              variant="contained"
              onClick={handleClearFilters}
              sx={{
                backgroundColor: '#E65C4F',
                color: 'black',
                borderRadius: '10px',
                width: '130px',
                fontSize: '0.7rem',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#d9534f',
                },
              }}
            >
              Limpiar filtros
            </Button>
          </div>


        </IonList>

        {/* Nuevo participante */}

        <div className='mt-4 flex justify-between'>
          <Button
            variant="contained"
            onClick={onAddParticipant}
            sx={{
              backgroundColor: '#E65C4F',
              color: 'black',
              borderRadius: '10px',
              width: '130px',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#d9534f',
              },
              margin: '0 9px',
            }}
          >
            Nuevo Participante
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SearchFilters;
