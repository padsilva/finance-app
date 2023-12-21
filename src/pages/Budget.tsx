import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { ExploreContainer } from "~/components/ExploreContainer";

export const Budget: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Budget</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Budget</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Budget page" />
      </IonContent>
    </IonPage>
  );
};
