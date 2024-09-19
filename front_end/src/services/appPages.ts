import FormNewUser from '../components/FormNewUser';
import UserList from '../pages/UserList';

//Consulta a la base de datos para recibir un array de menus segun el rol del usuario.
//Con el array debe asignar un componente a cada menu
//

interface AppPage {
  id: number; //ID de la tabla menu
  title: string;
  url: string;
  description: string;
  component: React.FC;
}


//Las paginas que no deben ser mostradas como opciones en el SideMenu deben tener id = 0 para que no sean asignadas a ningun rol, ya que seran accedidas
// desde un boton o algo por el estilo desde el MenuDisplay
const appPages: AppPage[] = [
  {
    id: 0,
    title: 'New User',
    url: '/profile/new-user',
    description: '',
    component: FormNewUser,
  },
  {
    id: 1,
    title: 'Participants',
    url:  '/profile/view-participants',
    description: '',
    component: UserList,
  },
  /*
  {
    title: 'Configuration',
    url: ' '/profile/config',
    roles: ['admin'],
    component: '',
  },
  {
    title: 'Programs',
    url: '/profile/programs',
    roles: ['admin','mentor', 'mentee'],
    component: '',
  },


  {
    title: 'Create Users',
    url: '/user/create-users',
    roles: ['mentor'],
    component: '',


  },
  {
    title: 'Edit Users',
    url: '/user/edit-users',
    roles: ['mentor'],
    component: '',


  },
  {
    title: 'My Projects',
    url: '/user/my-projects',
    roles: ['mentee'],
    component: '',


  },
  {
    title: 'New Projects',
    url: '/user/new-projects',
    roles: ['Admin'],
    component: '',
  }*/
];

export default appPages;