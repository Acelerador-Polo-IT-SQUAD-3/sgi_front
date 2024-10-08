
import React from 'react';
import { IonButton, IonContent, IonHeader, IonTitle } from '@ionic/react';
import Sidebar from './Sidebar';
import Logo from "../dummy-images/polo-it.png";


interface HeaderButton {
  label: string;
  onClick?: () => void; // Hacer que onClick sea opcional
  routerLink?: string; // Hacer que routerLink sea opcional
}

interface HeaderProps {
  buttons: HeaderButton[];
  activeSidebar: boolean;
  role: number
}

const Header: React.FC<HeaderProps> = ({ buttons, activeSidebar, role }) => {
  return (
    <>
      {activeSidebar ? (
        <>
          <Sidebar role={role} />

          <div className="flex justify-end items-end h-12 pr-2">
            {buttons.map((button, index) => (
              <IonButton
                key={index}
                onClick={button.onClick}
                routerLink={button.routerLink}
                fill="clear"
                className="
                w-[120px] 
              h-[40px] 
                mt-[13px] 
                bg-[#E9EEF4] 
                gap-[10px] 
                rounded-tl-[10px] 
                rounded-none 
                opacity-100
                text-black
                rounded-none
                text-xs
                font-poppins
                  text-[16px]
                  font-medium
                  leading-[24px]
                  tracking-[-0.1px]
                  text-center
              "
              >
                {button.label}
              </IonButton>
            ))}
          </div>
        </>
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
                  text-[16px]
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
