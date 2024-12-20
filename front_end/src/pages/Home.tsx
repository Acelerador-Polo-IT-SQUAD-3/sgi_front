
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonLoading } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeRoleView from '../components/HomeRoleView';
import { chatbubbles, logOut, person } from 'ionicons/icons';

const Home: React.FC<{ childComponent?: React.FC }> = ({ childComponent }) => {
  const history = useHistory();
  const [role, setRole] = useState<any>(null);
  const [headerButtons, setHeaderButtons] = useState<any>(null);

  const getRol = () => {
    const handleUser = sessionStorage.getItem('user');
    if (handleUser) {
      const parsedUser = JSON.parse(handleUser);
      return parsedUser.role_id;
    }
    return null;
  };

  const getUserId = () => {
    const handleUser = sessionStorage.getItem('user');
    if (handleUser) {
      const parsedUser = JSON.parse(handleUser);
      console.log('parsedUser: ',parsedUser)
      return parsedUser.id;
    }
    return null;
  };

  useEffect(() => {
    const rolId = getRol();
    if (rolId) {
      setRole(rolId);
      setHeaderButtons(
        [
          { label: "Profile", onClick: handleProfile, icon:'log-out', iconComponent: person },
          ...(rolId !== 3 ? [{ label: "Comunicación", onClick: handleComunicacion, icon: 'chatbubbles', iconComponent: chatbubbles }] : []),
          { label: "Logout", onClick: handleLogout, icon:'log-out', iconComponent: logOut },
        ]
      )
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

  const handleProfile = () => {
    history.push(`/profile/edit-user/${getUserId()}/true`);
  };

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