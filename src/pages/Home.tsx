import React from "react";

import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from "@ionic/react";
import { notifications } from "ionicons/icons";

import { ExploreContainer } from "~/components/ExploreContainer";
import { currentMonthIndex, currentYear, months } from "~/utils/date";

import "~/styles/Home.css";

export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="navbar">
            <IonButtons>
              <IonButton>
                <IonAvatar className="custom-icon">
                  <img
                    alt="Silhouette of a person's head"
                    src="https://ionicframework.com/docs/img/demos/avatar.svg"
                  />
                </IonAvatar>
              </IonButton>

              <IonList>
                <IonItem className="custom-ion-item">
                  <IonSelect
                    aria-label="Fruit"
                    interface="alert"
                    interfaceOptions={{
                      header: "Choose one month",
                    }}
                    placeholder="Select month"
                    value={months[currentMonthIndex]}
                  >
                    {months.map((month, index) => (
                      <IonSelectOption key={index} value={month}>
                        {`${month} '${currentYear}`}
                      </IonSelectOption>
                    ))}
                  </IonSelect>
                </IonItem>
              </IonList>

              <IonButton>
                <IonIcon icon={notifications} className="custom-icon" />
              </IonButton>
            </IonButtons>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Home page" />
      </IonContent>
    </IonPage>
  );
};
