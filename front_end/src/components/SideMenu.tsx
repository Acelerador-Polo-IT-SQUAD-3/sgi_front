import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import appPages from '../services/appPages';
import { useLocation } from 'react-router-dom';

const getUserPages = (role: string) => {
  return appPages.filter(page => page.roles.includes(role));
};

const SideMenu: React.FC = () => {
  const location = useLocation();
  const userRole = 'Admin';
  const userPages = getUserPages(userRole || 'mentee');
 
  return (
    <IonMenu contentId="main" type="overlay">
      <IonList id="inbox-list" className='h-full'>
        <IonListHeader>Bienvenido</IonListHeader>
        <IonNote>{/*Nombre del usuario*/}</IonNote>
        {userPages.map((appPage, index) => (
          <IonMenuToggle key={index} autoHide={false}>
            <IonItem 
              className={location.pathname === appPage.url ? 'selected' : ''} 
              routerLink={appPage.url} 
              routerDirection="none" 
              lines="none" 
              detail={false}
            >
              <IonLabel>{appPage.title}</IonLabel>
            </IonItem>
          </IonMenuToggle>
        ))}

      </IonList>
    </IonMenu>
  );
};

export default SideMenu;
