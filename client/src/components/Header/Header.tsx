/* eslint-disable linebreak-style */
import React from 'react';
import './Header.scss';

export function Header() {
  return (
    <div className="header" id="header">
      <div className="header__container">
        <div className="menu__container">
          <div className="images">
            <div className="nice_gadgets">
              <img
                className="nice"
                src={require('../../images/Nice_Gadgets.png')}
                alt="footerLogo"
              />
            </div>
            <div className="img_hand">
              <img
                className="hand"
                src={require('../../images/imageHand.png')}
                alt="hand_ok"
              />
            </div>
          </div>
          <nav className="header__menu">
            <div className="active">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link is-active" href="#section-1" >Home
                  </a>
                </li>
              </ul>
              <div className='line'></div>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#section-2" >Phones
                </a>
              </li>
            </ul>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#section-3" >Tablets
                </a>
              </li>
            </ul>
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#section-4" >Accessories
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__top">
          <div className="top_img">
            <a href="#header">
              <div className="container_img">
                <img
                  className="heart"
                  src={require('../../images/heart.png')}
                  alt="heart"
                />
              </div>
            </a>
            <a href="">
              <div className='container_img'>
                <img
                  className="bucket"
                  src={require('../../images/bucket.png')}
                  alt="bucket"
                />
              </div>
            </a>
          </div>
          <a href="#">
            <div className="container_img">
              <img
                className="cart"
                src={require('../../images/cart.png')}
                alt="Сart"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
