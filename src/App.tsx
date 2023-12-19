import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  add,
  colorPalette,
  document,
  globe,
  home,
  person,
  pieChart,
  swapHorizontal,
} from "ionicons/icons";

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

import { Budget } from "~/pages/Budget";
import { Home } from "~/pages/Home";
import { Profile } from "~/pages/Profile";
import { Transaction } from "~/pages/Transaction";

/* Theme variables */
import "~/theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/transaction">
            <Transaction />
          </Route>
          <Route exact path="/budget">
            <Budget />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route>
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="transaction" href="/transaction">
            <IonIcon aria-hidden="true" icon={swapHorizontal} />
            <IonLabel>Transaction</IonLabel>
          </IonTabButton>
          <IonTabButton tab="" disabled />
          <IonTabButton tab="budget" href="/budget">
            <IonIcon aria-hidden="true" icon={pieChart} />
            <IonLabel>Budget</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <IonFab slot="fixed" vertical="bottom" horizontal="center">
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
        <IonFabList side="top">
          <IonFabButton
            style={{
              transform: "translate(-100%, 0%)",
            }}
            color="success"
          >
            <IonIcon icon={document} />
          </IonFabButton>
          <IonFabButton color="tertiary">
            <IonIcon icon={colorPalette} />
          </IonFabButton>
          <IonFabButton
            style={{
              transform: "translate(100%, 250%)",
            }}
            color="danger"
          >
            <IonIcon icon={globe} />
          </IonFabButton>
        </IonFabList>
      </IonFab>
    </IonReactRouter>
  </IonApp>
);

export default App;
