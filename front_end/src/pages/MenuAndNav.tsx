//Menu dentro del perfil del usuario, contiene un sidemenu

import { IonPage, IonContent, IonSplitPane, IonRouterOutlet } from "@ionic/react";
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
    const headerButtons = [
        { label: 'Inicio', routerLink: '/home' },
        { label: 'Cerrar Sesión', onClick: handleLogout},
      ];

    return (
        <IonPage>
            <Header buttons={headerButtons} activeSidebar={false}/>
            <IonContent>
                <IonReactRouter>
                    <IonSplitPane contentId="main">
                        <SideMenu />
                        <IonRouterOutlet id="main">
                            <Route path="/" exact={true}>
                                <Redirect to="/folder/Inbox" />
                            </Route>
                            <Route path="/user/:name" exact={true}>
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
