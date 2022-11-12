'use strict';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.scss';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

export const Home = () => {

  return (
    <div className="">
      <h2 className='home-title'>Welcome to Nice Gadgets store!</h2>
      <Swiper
        modules={[Navigation, EffectFade]}
        navigation
        effect
        speed={800}
        slidesPerView={1}
        loop
        className='myswiper'
      >
        <SwiperSlide className='swiperslide'>
          <img src={require('../../images/iphone14.png')} />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src={require('../../images/iphone14.png')} />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src={require('../../images/iphone14.png')} />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
          <img src={require('../../images/iphone14.png')} />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}; 