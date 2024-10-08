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
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Menu } from "../util/types"
import { IonReactRouter } from "@ionic/react-router";

const Sidebar: React.FC= () => {
  const location = useLocation();
  const user = sessionStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;
  const [menus, setMenus] = useState<Menu[]>([]);
  const [userRole, setUserRole] = useState<number|undefined>(undefined);

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
    if (userRole) {
      fetchMenus();
    }
  }, [userRole]);

  return (
    <>
      <IonMenu contentId="main-content" style={{ height: '40%' }}>
        <IonContent>
          <IonList id="inbox-list" className="h-full">
            <IonHeader className="!bg-white">
              <IonToolbar>
                <IonTitle className="bg-white text-black">
                  <div className="flex items-center">
                    <img src="src/dummy-images/desktop-icon.png" alt="icono desktop" className="w-4 h-4 mr-2" />
                    <span className="font-poppins text-sm font-semibold leading-5 text-left">
                      Mis tareas
                    </span>
                  </div>
                </IonTitle>
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

      <div className="ion-page " id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" className="h-4 ml-2">
              <IonMenuButton></IonMenuButton>
            </IonButton>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
      </div>

    </>
  );
}



export default Sidebar;
