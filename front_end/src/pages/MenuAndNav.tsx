//Menu dentro del perfil del usuario, contiene un sidemenu

import { IonPage,IonButton,IonHeader,IonTitle, IonContent, IonSplitPane, IonRouterOutlet } from "@ionic/react";
import SideMenu from "../components/SideMenu";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router";
import MenuDisplay from "../components/MenuDisplay";

const MenuAndNav: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Menu And Navigation</IonTitle>
                <IonButton routerLink="/home">Home</IonButton>
                <IonButton routerLink="/login">login</IonButton>
                <IonButton routerLink="/signin">signin</IonButton>
                <IonButton routerLink="/welcome">welcome</IonButton>
            </IonHeader>
            <IonContent>
            <IonReactRouter>
                <IonSplitPane contentId="main">
                    <SideMenu />
                    <IonRouterOutlet id="main">
                        <Route path="/" exact={true}>
                            <Redirect to="/folder/Inbox" />
                        </Route>
                        <Route path="/folder/:name" exact={true}>
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
  