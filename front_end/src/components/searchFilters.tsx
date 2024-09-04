import React from 'react';
import { IonItem, IonList, IonSelect, IonSelectOption, IonTitle } from '@ionic/react';
import { Button } from '@mui/material';

interface SearchFiltersProps {
  onSearch: (filters: any) => void;
  onAddParticipant: () => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch, onAddParticipant }) => {
  const handleSearch = () => {
    const filters = {
      role: 'apples', // Reemplaza con los valores reales de los selects
      course: 'oranges',
      technology: 'bananas',
    };
    onSearch(filters);
  };

  return (
      <section className="px-2 mt-4 md:px-10 mb-4">
        <IonTitle className='p-0 mb-4'>Filtros de busqueda</IonTitle>
        <IonList className="bg-transparent flex justify-between">
          <IonItem lines='none' className="rounded-md">
            <IonSelect
              aria-label="Rol"
              placeholder="Rol"
              onIonChange={(e) =>
                console.log(`ionChange fired with value: ${e.detail.value}`)
              }
              onIonCancel={() => console.log('ionCancel fired')}
              onIonDismiss={() => console.log('ionDismiss fired')}
              className="w-32"
            >
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines='none' className="rounded-md">
            <IonSelect
              aria-label="Curso/Proyecto"
              placeholder="Curso/Proyecto"
              onIonChange={(e) =>
                console.log(`ionChange fired with value: ${e.detail.value}`)
              }
              onIonCancel={() => console.log('ionCancel fired')}
              onIonDismiss={() => console.log('ionDismiss fired')}
              className="w-32"
            >
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem lines='none'  className="rounded-md">
            <IonSelect
              aria-label="Tecnología"
              placeholder="Tecnología"
              onIonChange={(e) =>
                console.log(`ionChange fired with value: ${e.detail.value}`)
              }
              onIonCancel={() => console.log('ionCancel fired')}
              onIonDismiss={() => console.log('ionDismiss fired')}
              className="w-32"
            >
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <Button variant="contained" onClick={handleSearch}>Buscar</Button>
        </IonList>
      <div className='mt-4'>
        <Button variant="contained" onClick={onAddParticipant}>Nuevo Participante</Button>
      </div>  
      </section>
  );
};

export default SearchFilters;

