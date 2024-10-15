import React from "react";
import { IonButton, IonHeader, IonTitle, IonIcon } from "@ionic/react";
import Sidebar from "./Sidebar";
import Logo from "../dummy-images/polo-it.png";
import { chatbubbles, logOut } from 'ionicons/icons';

interface HeaderButton {
  label: string;
  onClick?: () => void; // Hacer que onClick sea opcional
  routerLink?: string; // Hacer que routerLink sea opcional
  icon?:string;
}

interface HeaderProps {
  buttons: HeaderButton[];
  activeSidebar: boolean;
}

const Header: React.FC<HeaderProps> = ({ buttons, activeSidebar }) => {
  return (
    <>
      {activeSidebar ? (
          <Sidebar buttons={buttons}/>
      ) : (
        <IonHeader className="flex justify-between items-center h-78 pr-2 bg-[#326789]">
          <IonTitle className="flex items-center ml-14">
            <img
              src={Logo}
              alt="PoloIT"
              style={{ height: "40px", width: "auto" }}
            />
          </IonTitle>
          <div className="flex items-center space-x-6">
            {buttons.map((button, index) => (
              <IonButton
                key={index}
                onClick={button.onClick}
                routerLink={button.routerLink}
                className="
                  w-[120px] 
                  h-[40px]
                  bg-[#E9EEF4] 
                  gap-[10px] 
                  rounded-[10px]
                  opacity-100
                  text-black
                  text-xs
                  font-poppins
                      text-[12px]
                      font-medium
                      leading-[24px]
                      tracking-[-0.1px]
                      text-center
                  "
                fill="clear"
              >
                {button.label}
              </IonButton>
            ))}
          </div>
        </IonHeader>
      )}
    </>
  );
};

export default Header;
