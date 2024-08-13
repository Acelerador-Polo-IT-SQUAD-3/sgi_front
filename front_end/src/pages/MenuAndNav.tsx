//Menu dentro del perfil del usuario, contiene un sidemenu

import { IonPage,IonButton,IonHeader,IonTitle } from "@ionic/react";

const MenuAndNav: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>Menu And Navigation</IonTitle>
                <IonButton routerLink="/home">Home</IonButton>
                <IonButton routerLink="/login">login</IonButton>
                <IonButton routerLink="/signin">signin</IonButton>
                <IonButton routerLink="/welcome">menu-and-nav</IonButton>
            </IonHeader>
        </IonPage>
    );
  };
  
  export default MenuAndNav;