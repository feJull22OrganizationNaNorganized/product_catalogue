'use strict';
import React from 'react';
import { FirstSwiper } from './firstSwiper/swiper';
import './Home.scss';


export const Home = () => {

  return (
    <div className="container">
      <h1 className='home-title'>Welcome to Nice Gadgets store!</h1>
      <FirstSwiper />  
    </div>
  );
};

