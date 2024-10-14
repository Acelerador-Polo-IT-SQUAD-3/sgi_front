import React from 'react';
import { IonButton, IonContent, IonHeader, IonTitle } from '@ionic/react';
import Sidebar from './Sidebar';
import Logo from "../dummy-images/polo-it.png";

// Definir interfaces
interface HeaderButton {
  label: string;
  onClick?: () => void;
  routerLink?: string;
}

interface HeaderProps {
  buttons: HeaderButton[];
  activeSidebar: boolean;
}

// Función para generar estilos de botones
const buttonClasses = `
  w-[120px]
  h-[40px]
  bg-[#E9EEF4]
  gap-[10px]
  opacity-100
  text-black
  text-xs
  font-poppins
  text-[16px]
  font-medium
  leading-[24px]
  tracking-[-0.1px]
  text-center
`;

// Componente principal Header
const Header: React.FC<HeaderProps> = ({ buttons, activeSidebar }) => {
  return (
    <>
      <IonHeader className="flex justify-between items-center h-78 pr-2 bg-[#326789]">
        {activeSidebar ? (
          <>
            <Sidebar />
          </>

        ) : (
          <>

          </>
        )
        }
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
              fill="clear"
              className={`${buttonClasses} rounded-[10px]`}
            >
              {button.label}
            </IonButton>
          ))}
        </div>
      </IonHeader>
    </>
  )
};

export default Header;