import {
  IonContent,
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
import React, { useEffect, useState } from 'react';

//[-----------------------------TERMINAR DE PROGRAMAR CUANDO EN EL BACKEND FUNCIONEN LAS TABLAS DE MENU----------------------------------]


//funcion para encontrar las paginas segun el rol.
function getUserPages(role: number) {
  //buscar ID de menus, devuelve un array con los id de menu. [1,5,6,8,9,....]
};

//const userPages = getUserPages(userRole || 'mentee');
const getRole = (user: string | null) => {
  if (user) {
    let u = JSON.parse(user);  // Convierte el string de sessionStorage a objeto
    console.log('Rol de usuario: ' + u.role_id);
    return u.role_id;  // Devuelve el rol_id
  }
  return null;
};

const SideMenu: React.FC = () => {

  const fetchMenus = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/menus/${userRole}`, {
        method: 'GET',  // Método POST para enviar el role_id
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los menús');
      }

      const data = await response.json();  // Recibimos los menús en formato JSON
      setMenus(data);  // Guardamos los menús en el estado
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };


  const location = useLocation();
  const user = sessionStorage.getItem('user');
  const userRole = getRole(user);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" className='h-full'>
          <IonListHeader>Bienvenido</IonListHeader>
          <IonNote>{/*Nombre*/}</IonNote>
          {appPages.map((appPage, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === appPage.url ? 'selected' : ''}
                routerLink={appPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
                color={"transparent"}
              >
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}

        </IonList>
      </IonContent>

    </IonMenu>
  );
};

export default SideMenu;
