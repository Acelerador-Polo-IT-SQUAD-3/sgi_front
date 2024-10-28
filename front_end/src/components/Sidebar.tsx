import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonItem,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonMenuToggle,
  IonIcon,
  IonButtons,
  IonNote
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Menu } from "../util/types"
import desktopIcon from '../../public/imgs/desktop-icon.png'
import Logo from "../../public/imgs/polo-it.png";
import { close } from 'ionicons/icons';
import { chatbubbles, logOut } from 'ionicons/icons';
import "../theme/variables.css";

interface HeaderProps {
  buttons: any[];
}
const Sidebar: React.FC<HeaderProps> = ({ buttons }) => {
  const location = useLocation();
  const user = sessionStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;
  const [menus, setMenus] = useState<Menu[]>([]);
  const [userRole, setUserRole] = useState<number | undefined>(undefined);

  const getRole = (user: string | null) => {
    if (user) {
      let u = JSON.parse(user); // Convierte el string de sessionStorage a objeto
      return u.role_id; // Devuelve el rol_id
    }
    return null;
  };

  const fetchMenus = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/menus/${userRole}`, {
        method: 'GET',  // Método POST para enviar el role_id
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener los menús");
      }

      const data = await response.json(); // Recibimos los menús en formato JSON
      setMenus(data); // Guardamos los menús en el estado
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    setUserRole(getRole(user))
  }, []);

  useEffect(() => {
    if (userRole && (!menus || menus?.length ===0)) {
      fetchMenus();
    }
  }, [userRole]);

  const closeMenu = () => {
    document.querySelector('ion-menu')?.close();
  };

  return (
    <>
      <IonMenu contentId="main-content" style={{ height: '40%' }}>
        <IonContent>
          <IonList id="inbox-list" className="h-full">
            <IonHeader>
              <IonToolbar>
                <IonTitle className="text-black">
                  <div className="flex items-center">
                    <img src={desktopIcon} alt="icono desktop" className="w-4 h-4 mr-2" />
                    <span className="font-poppins text-sm font-semibold leading-5 text-left">
                      Mis tareas
                    </span>
                  </div>
                </IonTitle>
                <IonButtons slot="end">
                  <IonButton onClick={closeMenu} fill="clear">
                    <IonIcon icon={close} />
                  </IonButton>
                </IonButtons>
                <IonNote className="custom-note"> {userData ? userData.name + " " + userData.surname + " (" +userData.role_name + ")": ""}</IonNote>
              </IonToolbar>
            </IonHeader>
            {menus.map((menu, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === menu.path ? "selected" : ""}
                  routerLink={menu.path}
                  routerDirection="forward"
                  lines="none"
                  detail={false}
                  color={"transparent"}
                >
                  <IonLabel>{menu.name}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>

      <div id="main-content">
        <IonHeader style={{ backgroundColor: '#326789' }}>
          <div className="flex items-end space-x-6">
            <IonButton slot="start" className="h-4" fill="clear" style={{ marginBottom: '10px' }}>
              <IonMenuButton style={{ color: 'white' }}></IonMenuButton>
            </IonButton>
            <IonTitle className="ml-14" style={{ marginBottom: '8px' }}>
              <img
                src={Logo}
                alt="PoloIT"
                style={{ height: "40px", width: "auto" }}
              />
            </IonTitle>          
            {buttons.map((button, index) => (
              <IonButton
                slot="end"
                key={index}
                onClick={button.onClick}
                routerLink={button.routerLink}
                fill="clear"
              >
                <IonIcon icon={button.iconComponent} size="large" style={{ color: 'white' }}/>
              </IonButton>
            ))}
          </div>          
        </IonHeader>
      </div>

    </>
  );
}



export default Sidebar;
