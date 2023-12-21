import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { ExploreContainer } from "~/components/ExploreContainer";

export const Transaction: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Transaction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Transaction</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Transaction page" />
      </IonContent>
    </IonPage>
  );
};
