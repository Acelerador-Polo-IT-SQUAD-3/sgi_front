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
        <IonHeader >
          <IonToolbar color="tertiary">
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="ion-padding">
          <IonButton className="w-full" routerLink="#">Configuración</IonButton>
        </IonContent>
      </IonMenu>
      <div className="ion-page " id="main-content">
        <IonHeader className="pl-2">
          <IonToolbar className="">
            <IonButton slot="start" className="h-4">
              <IonMenuButton ></IonMenuButton>
            </IonButton>
            <IonTitle></IonTitle>
          </IonToolbar>
        </IonHeader>
      </div>
    </>
  );
}

export default Sidebar;
