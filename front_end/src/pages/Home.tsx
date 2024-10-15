
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonLoading } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeRoleView from '../components/HomeRoleView';
import { chatbubbles, logOut } from 'ionicons/icons';

const Home: React.FC<{ childComponent?: React.FC }> = ({ childComponent }) => {
  const history = useHistory();
  const [role, setRole] = useState<any>(null);

  useEffect(() => {
    const handleUser = sessionStorage.getItem('user');
    if (handleUser) {
      const parsedUser = JSON.parse(handleUser);
      setRole(parsedUser.role_id);
    } else {
      history.push('/login');
    }
  }, [history]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('rol_id');
    history.push('/login');
  };

  const handleComunicacion = () => {
    history.push('/profile/comunication');
  };

  const headerButtons = [
    //{ label: "Profile", onClick: () => history.push("/menu-and-nav") },
    { label: "Comunicación", onClick: handleComunicacion, icon:'chatbubbles' },
    { label: "Logout", onClick: handleLogout, icon:'log-out' },
  ];

  if (!role) {
    return <IonLoading trigger="open-loading" message="Loading..." duration={3000} spinner="circles" />;
  }

  return (
    <>
      <Header buttons={headerButtons} activeSidebar={true} />
      {childComponent?
        React.createElement(childComponent) :
        <HomeRoleView role={role} />
      }
      
      <Footer />
    </>
  );
};

export default Home;