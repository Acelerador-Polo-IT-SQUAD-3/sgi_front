import {
  IonButton,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonRouterLink,
} from "@ionic/react";

interface SidebarRole {
  role: number
}


const Sidebar: React.FC<SidebarRole> = ({ role }) => {
  console.log("Role", role);

  return (
    <>
      {
        role === 1 && (
          <IonMenu contentId="main-content" style={{ height: '40%' }}>

            <IonHeader className="!bg-white">
              <IonToolbar>

                <IonTitle className="bg-white text-black">
                  <div className="flex items-center">
                    <img src="src/dummy-images/desktop-icon.png" alt="icono desktop" className="w-4 h-4 mr-2" />
                    <span className="font-poppins text-sm font-semibold leading-5 text-left">
                      Mis tareas
                    </span>
                  </div>
                </IonTitle>

              </IonToolbar>

            </IonHeader>

            <IonContent className="ion-padding">
              <IonRouterLink className="text-black font-poppins text-sm" routerLink="/configuracion">
                Mi información
              </IonRouterLink>

              <IonRouterLink className="block text-black font-poppins text-sm mt-4" routerLink="/perfil">
                Mis Programas
              </IonRouterLink>
            </IonContent>


          </IonMenu>
        )
      }

      {
        role === 2 && (
          <IonMenu contentId="main-content" style={{ height: '40%' }}>

            <IonHeader className="!bg-white">
              <IonToolbar>

                <IonTitle className="bg-white text-black">
                  <div className="flex items-center">
                    <img src="src/dummy-images/desktop-icon.png" alt="icono desktop" className="w-4 h-4 mr-2" />
                    <span className="font-poppins text-sm font-semibold leading-5 text-left">
                      Mis tareas 2
                    </span>
                  </div>
                </IonTitle>

              </IonToolbar>

            </IonHeader>

            <IonContent className="ion-padding">
              <IonRouterLink className="text-black font-poppins text-sm" routerLink="/configuracion">
                Gestión
              </IonRouterLink>

              <IonRouterLink className="block text-black font-poppins text-sm mt-4" routerLink="/perfil">
                Gestión de participantes
              </IonRouterLink>

              <IonRouterLink className="block text-black font-poppins text-sm mt-4" routerLink="/perfil">
                Programas
              </IonRouterLink>

              <IonRouterLink className="block text-black font-poppins text-sm mt-4" routerLink="/perfil">
                Configuración
              </IonRouterLink>
            </IonContent>


          </IonMenu>
        )
      }

      {
        role === 3 && (
          <IonMenu contentId="main-content" style={{ height: '40%' }}>

            <IonHeader className="!bg-white">
              <IonToolbar>

                <IonTitle className="bg-white text-black">
                  <div className="flex items-center">
                    <img src="src/dummy-images/desktop-icon.png" alt="icono desktop" className="w-4 h-4 mr-2" />
                    <span className="font-poppins text-sm font-semibold leading-5 text-left">
                      Mis tareas 3
                    </span>
                  </div>
                </IonTitle>

              </IonToolbar>

            </IonHeader>

            <IonContent className="ion-padding">
              <IonRouterLink className="text-black font-poppins text-sm" routerLink="/configuracion">
                Mentoría
              </IonRouterLink>

              <IonRouterLink className="block text-black font-poppins text-sm mt-4" routerLink="/perfil">
                Mi información
              </IonRouterLink>

              <IonRouterLink className="block text-black font-poppins text-sm mt-4" routerLink="/perfil">
                Mis mentees
              </IonRouterLink>

            </IonContent>


          </IonMenu>
        )
      }

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
