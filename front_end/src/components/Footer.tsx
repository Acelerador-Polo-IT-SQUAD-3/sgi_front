import { IonFooter, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

function Footer() {
  return (
      <IonFooter translucent={true} collapse="fade">
        <IonToolbar>
          <IonTitle className="text-center text-white">Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
            // <footer className="h-10 bg-gray-300">
            // <p className="text-center">Footer</p>
            // </footer>
  );
}

export default Footer;
