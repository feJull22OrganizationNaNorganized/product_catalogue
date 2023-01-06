import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './swiper.scss';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

export const FirstSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="flex">
          <img
            className='slider-item'
            src={require('../../../images/Screenshot_1.png')}
            alt="footerLogo"
          />
          <div className="slider__buy">
            <div className="slider-buy-box">
              <h3 className='box-title'>
                Now available in our store!
              </h3>
              <p className='box-subtitle'>
                Be the first!
              </p>
              <Link className='box-btn' to='/product_catalogue'>
                Order now
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex">
          <img
            className='slider-item'
            src={require('../../../images/02.png')}
            alt="footerLogo"
          />
          <div className="slider__buy">
            <div className="slider-buy-box">
              <h3 className='box-title'>
                Now available in our store!
              </h3>
              <p className='box-subtitle'>
                Be the first!
              </p>
              <Link className='box-btn' to='/product_catalogue'>
                Order now
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex">
          <img
            className='slider-item'
            src={require('../../../images/iphones.png')}
            alt="footerLogo"
          />
          <div className="slider__buy">
            <div className="slider-buy-box">
              <h3 className='box-title'>
                Now available in our store!
              </h3>
              <p className='box-subtitle'>
                Be the first!
              </p>
              <Link className='box-btn' to='/product_catalogue'>
                Order now
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};