import {
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

type Menu = {
  id: number;
  name: string;
  path: string;
};


const getRole = (user: string | null) => {
  if (user) {
    let u = JSON.parse(user); // Convierte el string de sessionStorage a objeto
    return u.role_id; // Devuelve el rol_id
  }
  return null;
};

const SideMenu: React.FC = () => {

  const location = useLocation();
  const user = sessionStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;
  const userRole = getRole(user);
  const [menus, setMenus] = useState<Menu[]>([]);

  const getUserPages = () => {
    return menus.map((menu) => menu.id);
  };

  const fetchMenus = async () => {
    try {
      const response = await fetch(`http://localhost:3000/menus/${userRole}`, {
        method: "GET", // Método POST para enviar el role_id
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
    if (userRole) {
      fetchMenus();
    }
  }, [userRole]);

  console.log(getUserPages())
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list" className="h-full">
          <IonListHeader>Bienvenido</IonListHeader>
          <IonNote>{userData ? userData.name : ""}</IonNote>
          {menus.map((menu, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem
                className={location.pathname === menu.path ? "selected" : ""}
                routerLink={menu.path}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonLabel>{menu.name}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideMenu;
