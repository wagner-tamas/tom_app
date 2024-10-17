import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      {/*<IonHeader>
        <IonToolbar>
          <IonTitle>Blank fent</IonTitle>
        </IonToolbar>
      </IonHeader>*/}
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank lent</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/*<ExploreContainer/>*/}
        <IonContent fullscreen>
  <iframe src="https://dtutor-teszt.woodpecker.hu/dTutor"  scrolling="yes"></iframe>
</IonContent>
</IonContent>

    </IonPage>
  );
};

export default Home;
