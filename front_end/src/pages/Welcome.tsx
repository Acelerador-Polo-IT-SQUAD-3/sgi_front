//Pagina que muestra informacion a traves de fotos, contiene los vectores que enrutan hacia register y login

import { IonPage, IonHeader, IonTitle, IonButton, IonContent } from "@ionic/react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { fetchUsers, User } from "../services/api";


const Welcome: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  // useEffect(() => {
  //     const getUsers = async () => {
  //             const usersData = await fetchUsers();
  //             setUsers(usersData);
  //     };

  //     getUsers();
  // }, []);

  return (
    <IonPage>
      <IonHeader className="bg-transparent flex justify-end items-center h-[10%]">
        <IonTitle>Polo IT</IonTitle>
        <IonButton className="h-8" fill="outline" routerLink='/login'>Iniciar Sesión</IonButton>
        <IonButton className="h-8 mr-5" routerLink='/signin'>Registrarse</IonButton>
      </IonHeader>
      <IonContent className="absolute top-0 left-0" fullscreen >
         <Carousel/>
         {/* <div>
            <h1>Lista de Usuarios</h1>
            <ul>
                {users.map(user => (
                    <li className=" mx-auto" key={user.id}>
                        <strong>ID:</strong> {user.id}<br />
                        <strong>Nombre:</strong> {user.name}<br />
                        <strong>Apellido:</strong> {user.surname}<br />
                        <strong>DNI:</strong> {user.dni}<br />
                        <strong>Descripción:</strong> {user.description}<br />
                        <strong>Email:</strong> {user.email}
                    </li>
                ))}
            </ul>
        </div> */}
      </IonContent>
      <Footer/>
    </IonPage >
  );
};

export default Welcome;