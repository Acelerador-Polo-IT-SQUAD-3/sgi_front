//Menu dentro del perfil del usuario, contiene un sidemenu


import { IonButton, IonHeader, IonTitle, IonContent, IonSplitPane, IonRouterOutlet, IonItem, IonPage } from "@ionic/react";

import SideMenu from "../components/SideMenu";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import { useHistory } from 'react-router-dom';
import MenuDisplay from "../components/MenuDisplay";
import Header from "../components/Header";

const MenuAndNav: React.FC = () => {

    const history = useHistory();


    const handleLogout = () => {
        sessionStorage.removeItem('user');
        history.push('/login');
    };


    return (
        <IonPage>
            <IonHeader>
                <IonItem lines="none" className="flex items-stretch">
                    <IonTitle>Profile</IonTitle>
                    <IonButton routerLink="/home">Home</IonButton>
                    <IonButton className='justify-end' onClick={handleLogout}>Log Out</IonButton>
                </IonItem>
            </IonHeader>
            <IonContent>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <SideMenu />
                        <IonRouterOutlet id="main">
                            <Route path="/" exact={true}>
                                <Redirect to="/profile" />
                            </Route>
                            <Route path="/profile/:name" exact={true}>
                                <MenuDisplay />
                            </Route>

                        </IonRouterOutlet>
                    </IonSplitPane>

                </IonReactRouter>
            </IonContent>
        </IonPage>
    );
};

export default MenuAndNav;
