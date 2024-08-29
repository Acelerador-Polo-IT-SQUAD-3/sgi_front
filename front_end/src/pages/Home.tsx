
//Dentro del perfil, una vez que el usuario haya logeado
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { IonContent } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const history = useHistory();


  const history = useHistory();
  const handleUser = sessionStorage.getItem('user')
  const user = handleUser ? JSON.parse(handleUser) : null;


  if (!user) {
    history.push('/login')
    return null;
  }

  const handleLogout = () => {
    console.log(sessionStorage.getItem('user'))
    sessionStorage.removeItem('user');
    console.log(sessionStorage.getItem('user'))
    history.push('/login');
  };


  const headerButtons = [
    { label: 'Profile', onClick: () => history.push('/menu-and-nav') },
    { label: 'Logout', onClick: handleLogout },
  ];

  return (
    <>
      <Header buttons={headerButtons} activeSidebar={true}/>
      <IonContent>
        <Carousel/>
      </IonContent>   
      <Footer/>
    </>
  );
};

export default Home;

