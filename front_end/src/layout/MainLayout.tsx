import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Header from '../components/Header';

interface HeaderButton {
  label: string;
  onClick: () => void;
}

interface MainLayoutProps {
  children: React.ReactNode;
  headerButtons: HeaderButton[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, headerButtons }) => {
  return (
    <IonPage>
      <Header buttons={headerButtons} activeSidebar={false} />
        {children}
      <Footer/>
    </IonPage>
  );
};

export default MainLayout;
