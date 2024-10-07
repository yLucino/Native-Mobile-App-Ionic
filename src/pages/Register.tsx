import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';
import React from 'react';

const Resgister: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log(doRegister);
    router.goBack();
  };

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar color={'warning'}>
        <IonButtons slot='start'>
          <IonBackButton defaultHref='/' />
        </IonButtons>
        <IonTitle>Create Accout</IonTitle>
      </IonToolbar>
    </IonHeader>
    
    <IonContent scrollY={false}>
      <IonGrid fixed>
        <IonRow className="ion-justify-content-center">
          <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
            <IonCard>
              <IonCardContent>
                <form onSubmit={doRegister}>
                  <IonInput label="Email" type="email" labelPlacement="floating" fill="outline" placeholder="exemple@gmail.com"/>
                  <IonInput className="ion-margin-top" label="Password" type="password" labelPlacement="floating" fill="outline" placeholder="Your password"/>
                  <IonButton className="ion-margin-top" type="submit" expand="block">
                    Create my account
                    <IonIcon icon={checkmarkDoneOutline} slot="end"/>
                  </IonButton>
                </form>  
              </IonCardContent>  
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
  );
};

export default Resgister;