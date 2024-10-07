import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from "@ionic/react"
import React, { useEffect, useState } from "react"
import { logInOutline, personCircleOutline } from 'ionicons/icons';
import Logo from '../assets/logo.png';
import Intro from "../components/intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = 'intro-seen'

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dimiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("🚀 ~ file: Login.tsx:17 ~ checkStorage ~ seen:", seen);
      setIntroSeen(seen.value === 'true');
    }
    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present('Logging in...')
    setTimeout(async () => {
      dimiss();
      router.push('/app', 'root');
    }, 2000);
  }

  const finishIntro = async () => {
    setIntroSeen(true)
    Preferences.set({ key: INTRO_KEY, value: 'true' })
  }
 
  const seeIntroAgain = async () => {
    setIntroSeen(false)
    Preferences.remove({ key: INTRO_KEY })
  }

  return(
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro}/>
      ) : (
        <IonPage>
          <IonHeader>
            <IonToolbar color={'warning'}>
              <IonTitle>Title</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <img src={Logo} alt="Logo" width={'50%'} />
                  </div>
                </IonCol>
              </IonRow>

              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput label="Email" type="email" labelPlacement="floating" fill="outline" placeholder="exemple@gmail.com"/>
                        <IonInput className="ion-margin-top" label="Password" type="password" labelPlacement="floating" fill="outline" placeholder="Your password"/>
                        <IonButton className="ion-margin-top" type="submit" expand="block">
                          Login
                          <IonIcon icon={logInOutline} slot="end"/>
                        </IonButton>
                        <IonButton routerLink="/register" color="secondary" className="ion-margin-top" type="button" expand="block">
                          Create accout
                          <IonIcon icon={personCircleOutline} slot="end"/>
                        </IonButton>
                        <IonButton onClick={seeIntroAgain} fill="clear" size="small" color="medium" className="ion-margin-top" type="button" expand="block">
                          Watch intro again
                        </IonButton>
                      </form>  
                    </IonCardContent>  
                  </IonCard>  
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  )
}

export default Login
