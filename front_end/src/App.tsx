import { Redirect, Route } from "react-router-dom";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import MenuAndNav from "./pages/MenuAndNav";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/SignIn";
import Comunication from "./pages/Comunication";
import UserList from "./pages/UserList";
import TeamList from './pages/TeamList';
import FormNewUser from "./components/FormNewUser";
import FormEditUser from "./components/FormEditUser";




/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

//import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import "./input.css";
import "./theme/variables.css";



setupIonicReact();


const setPage = () => {
  const handleUser = sessionStorage.getItem("user");
  return handleUser ? (
    <Route path="/">
      <Redirect to="/home" />
    </Route>
  ) : (
    <Route path="/">
      <Redirect to="/welcome" />
    </Route>
  );
};

const App: React.FC = () => (
  <IonApp className="font-poppins">
    <IonReactRouter>

{/*       {sessionStorage.getItem('user') && <HeaderLogin />} */}

      {setPage()}
      <Route path="/home" component={Home} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/login" component={LogIn} />
      <Route path="/signin" component={SignIn} />
      <Route exact path="/menu-and-nav" component={MenuAndNav} />
      {/* <Route path="/profile/edit-user/:id" component={FormEditUser} /> */}
      <Route
        exact
        path="/profile/comunication"
        render={(props) => <Home {...props} childComponent={Comunication} />}
      />
      <Route
        exact
        path="/profile/view-participants"
        render={(props) => <Home {...props} childComponent={UserList} />}
      />
      <Route
        exact
        path="/profile/teams"
        render={(props) => <Home {...props} childComponent={TeamList} />}
      />
      <Route
        exact
        path="/profile/new-user"
        render={(props) => <Home {...props} childComponent={FormNewUser} />}
      />
      <Route
        exact
        path="/profile/edit-user/:id/:profile"
        render={(props) => <Home {...props} childComponent={FormEditUser} />}
      />
    </IonReactRouter>
  </IonApp>
);

export default App;
