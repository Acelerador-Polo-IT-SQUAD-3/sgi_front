import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

function Sidebar() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader className="!bg-white">
          <IonToolbar color="medium">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonButton className="w-full" routerLink="#">Configuración</IonButton>
        </IonContent>
      </IonMenu>
      <div className="ion-page " id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButton slot="start" className="h-4 ml-2">
              <IonMenuButton></IonMenuButton>
            </IonButton>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
      </div>
    </>
  );
}

export default Sidebar;
