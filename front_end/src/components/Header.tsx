import React from 'react';
import { IonButton, IonContent, IonHeader, IonTitle } from '@ionic/react';
import Sidebar from './Sidebar';

interface HeaderButton {
  label: string;
  onClick?: () => void; // Hacer que onClick sea opcional
  routerLink?: string; // Hacer que routerLink sea opcional
}

interface HeaderProps {
  buttons: HeaderButton[];
  activeSidebar: boolean;
}

const Header: React.FC<HeaderProps> = ({ buttons, activeSidebar }) => {
  return (
    <>
      {activeSidebar ? (
        <>
          <Sidebar />
          <div className='flex justify-end items-center h-16 pr-8'>
            {buttons.map((button, index) => (
              <IonButton
                className='!text-white'
                key={index}
                onClick={button.onClick}
                routerLink={button.routerLink}
              >
                {button.label}
              </IonButton>
            ))}
          </div>
        </>
      ) : (
        <IonHeader className='flex justify-end items-center h-16 pr-8'>
          <IonTitle>Polo IT</IonTitle>
          <div>
            {buttons.map((button, index) => (
              <IonButton
                className='!text-white'
                key={index}
                onClick={button.onClick}
                routerLink={button.routerLink}
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



