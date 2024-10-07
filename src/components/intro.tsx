import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React, { Children } from 'react';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import 'swiper/css'
import './intro.css';

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return(
    <Swiper>
      <SwiperSlide>
        <img src={img1} alt="Image1 slide" />
        <IonText>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique?</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Image2 slide" />
        <IonText>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique?</h3>
        </IonText>
        <SwiperButtonNext>Next</SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Image3 slide" />
        <IonText>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique?</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  ); 
};

export default Intro;