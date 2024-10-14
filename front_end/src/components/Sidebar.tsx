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
import { Menu } from "../util/types";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const user = sessionStorage.getItem("user");
  const userData = user ? JSON.parse(user) : null;
  const [menus, setMenus] = useState<Menu[]>([]);
  const [userRole, setUserRole] = useState<number | undefined>(undefined);

  const getRole = (user: string | null) => {
    if (user) {
      const u = JSON.parse(user);
      return u.role_id;
    }
    return null;
  };

  const fetchMenus = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiUrl}/menus/${userRole}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener los menús");
      }

      const data = await response.json();
      setMenus(data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  useEffect(() => {
    setUserRole(getRole(user));
  }, [user]);

  useEffect(() => {
    if (userRole) {
      fetchMenus();
    }
  }, [userRole]);

  return (
    <>
      {/* Barra superior con botón de menú */}
      <IonToolbar className="bg-transparente flex justify-between items-center">
        <IonButton slot="start" className="bg-[#326789] rounded-md p-2 h-10 w-10 flex items-center justify-center">
          <IonMenuButton className="text-white text-3xl" />
        </IonButton>
        <div id="main-content"></div>
      </IonToolbar>
      {/* Menú lateral */}
      <IonMenu contentId="main-content" style={{ height: "100%" }}>
        <IonContent>
          <IonList id="inbox-list" className="h-full">
            {/* Encabezado del menú */}
            <IonHeader className="bg-[#326789]">
              <IonToolbar>
                <IonTitle className="bg-white text-black">
                  <div className="flex items-center">
                    <img
                      src="src/dummy-images/desktop-icon.png"
                      alt="icono desktop"
                      className="w-4 h-4 mr-2"
                    />
                    <span className="font-poppins text-sm font-semibold leading-5 text-left">
                      Mis tareas
                    </span>
                  </div>
                </IonTitle>
              </IonToolbar>
            </IonHeader>

            {/* Menú de opciones dinámico */}
            {menus.map((menu, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={location.pathname === menu.path ? "selected bg-gray-200" : ""}
                  routerLink={menu.path}
                  routerDirection="forward"
                  lines="none"
                  detail={false}
                  color="transparent"
                >
                  <IonLabel>{menu.name}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            ))}
          </IonList>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Sidebar;
