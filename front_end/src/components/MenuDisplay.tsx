import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import appPages from '../services/appPages';

const MenuDisplay: React.FC = () => {
  const { name } = useParams<{ name: string; }>();

  const getPage = (name: string) => {
    return appPages.find(page => page.url.includes(name));
  };
  const page = getPage(name);

  if (!page) {
    return <div>Page not found</div>; // Manejo de error si la página no existe
  }
  const Component = page.component;

  return (
    <IonPage>
      <IonContent fullscreen>
        <Component/>
      </IonContent>
    </IonPage>
  );
};

export default MenuDisplay;
