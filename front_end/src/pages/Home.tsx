
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonLoading } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeRoleView from '../components/HomeRoleView';

const Home: React.FC = () => {
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

  const headerButtons = [
    { label: "Profile", onClick: () => history.push("/menu-and-nav") },
    { label: "Logout", onClick: handleLogout },
  ];

  if (!role) {
    return <IonLoading trigger="open-loading" message="Loading..." duration={3000} spinner="circles" />;
  }

  return (
    <>
      <Header buttons={headerButtons} activeSidebar={true} role={role} />
      <HomeRoleView role={role} />
      <Footer />
    </>
  );
};

export default Home;