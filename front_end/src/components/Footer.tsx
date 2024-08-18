import { IonFooter, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

function Footer() {
  return (
      <IonFooter>
        <IonToolbar>
          <IonTitle className="text-center">Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
  );
}

export default Footer;
