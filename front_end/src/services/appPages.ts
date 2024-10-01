import Config from "../components/Config";
import FormNewUser from "../components/FormNewUser";
import Programs from "../components/Programs";
import UserList from "../pages/UserList";

//Consulta a la base de datos para recibir un array de menus segun el rol del usuario.
//Con el array debe asignar un componente a cada menu
//

interface AppPage {
  title: string;
  url: string;
  component: React.FC;
}

//Las paginas que no deben ser mostradas como opciones en el SideMenu deben tener id = 0 para que no sean asignadas a ningun rol, ya que seran accedidas
// desde un boton o algo por el estilo desde el MenuDisplay
const appPages: AppPage[] = [
  {
    title: "Nuevo Usuario",
    url: "/profile/new-user",
    component: FormNewUser,
  },
  {
    title: "Participantes",
    url: "/profile/view-participants",
    component: UserList,
  },
  {
    title: "Configuration",
    url: "/profile/config",
    component: Config,
  },
  {
    title: "Programs",
    url: "/profile/programs",
    component: Programs,
  },
];

export default appPages;
