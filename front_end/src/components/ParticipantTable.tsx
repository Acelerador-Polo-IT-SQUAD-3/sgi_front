import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  useIonAlert,
  IonToast,
  IonCard,
  IonCardContent,
  IonIcon,
  IonCardHeader,
  IonItem,
} from "@ionic/react";
import { Participant } from "../pages/UserList";
import { create, trash } from "ionicons/icons";

interface ParticipantTableProps {
  participants: Participant[];
  onEdit: (participant: Participant) => void;
  onDelete: (participant: Participant) => void;
}
const getRole = (user: string | null) => {
  if (user) {
    let u = JSON.parse(user); // Convierte el string de sessionStorage a objeto
    return u.role_id; // Devuelve el rol_id
  }
  return null;
};
const ParticipantTable: React.FC<ParticipantTableProps> = ({
  participants,
  onEdit,
  onDelete,
}) => {
  const [presentAlert] = useIonAlert();
  const [isOpen, setIsOpen] = useState(false);
  const user = sessionStorage.getItem("user");
  const userRole = getRole(user);

  const handleDelete = (participant: Participant) => {
    presentAlert({
      header: "¿Estas seguro que quieres eliminar a este usuario?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "Si",
          role: "confirm",
          handler: () => {
            onDelete(participant);
            setIsOpen(true);
          },
        },
      ],
      onDidDismiss: ({ detail }) =>
        console.log(`Dismissed with role: ${detail.role}`),
    });
  };

  return (
    <IonCard className="bg-white mx-24 mt-0 relative overflow-y-scroll scrollbar-hide font-poppins">
      <IonGrid className="p-0">
        <IonCardHeader className="sticky top-0 z-10 bg-white py-0 ">
          <IonRow className="rounded-sm py-2">
            <IonItem
              color="light"
              lines="none"
              className="rounded-lg w-full p-0 m-0 text-sm h-8 flex items-center font-bold shadow-md"
            >
              <IonCol
                size={userRole != 1 ? "3" : "4"}
                className="text-center text-xs"
              >
                Nombre y apellido
              </IonCol>
              <IonCol
                size={userRole != 1 ? "3" : "4"}
                className="text-center text-xs"
              >
                Email
              </IonCol>
              <IonCol
                size={userRole != 1 ? "3" : "4"}
                className="text-center text-xs"
              >
                Compañía
              </IonCol>
              {userRole != 1 && (
                <IonCol size="3" className="text-center text-xs">
                  Acción
                </IonCol>
              )}
            </IonItem>
          </IonRow>
        </IonCardHeader>
        <IonCardContent className="">
          {participants.map((participant, index) => (
            <IonRow className="flex items-center w-full" key={index}>
              <IonItem className="w-full h-12">
                <IonCol
                  size={userRole != 1 ? "3" : "4"}
                  className="text-center w-full text-sm"
                >
                  {participant.name + " " + participant.surname}
                </IonCol>

                <IonCol
                  size={userRole != 1 ? "3" : "4"}
                  className="text-center w-full text-sm"
                >
                  {participant.email}
                </IonCol>
                <IonCol
                  size={userRole != 1 ? "3" : "4"}
                  className="text-center w-full text-sms"
                >
                  {participant.company}
                </IonCol>
                {userRole != 1 && (
                  <IonCol
                    size="3"
                    className="flex p-0 m-0 justify-center w-full"
                  >
                    <IonIcon
                      icon={create}
                      className="text-3xl mr-4"
                      style={{ color: "#D8434380" }}
                      onClick={() => onEdit(participant)}
                    ></IonIcon>
                    {userRole === 3 && (
                      <IonIcon
                        icon={trash}
                        className="text-3xl"
                        style={{ color: "#D8434380" }}
                        onClick={() => handleDelete(participant)}
                      ></IonIcon>
                    )}
                  </IonCol>
                )}
              </IonItem>
            </IonRow>
          ))}
        </IonCardContent>
      </IonGrid>

      <IonToast
        isOpen={isOpen}
        message="Se ha eliminado el usuario correctamente"
        onDidDismiss={() => setIsOpen(false)}
        duration={3000}
        color={"light"}
        className="text-center"
      ></IonToast>
    </IonCard>
  );
};

export default ParticipantTable;
