/* eslint-disable linebreak-style */
import React from 'react';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import s from './Header.module.scss';

export function Header() {
  return (
    <>
      <div className={s.header} id="header">
        <div className={s.header__container}>
          <div className={s.menu__container}>
            <div className={s.images}>
              <div className={s.nice_gadgets}>
                <img
                  className={s.nice}
                  src={require('../../images/Nice_Gadgets.png')}
                  alt="footerLogo"
                />
              </div>
              <div className={s.img_hand}>
                <img
                  className={s.hand}
                  src={require('../../images/imageHand.png')}
                  alt="hand_ok"
                />
              </div>
            </div>
            <nav className={s.header__menu}>
              <div className={s.active}>
                <ul className={s.nav__list}>
                  <li className={s.nav__item}>
                    <a className="nav__link is-active" href="#section-1">
                      Home
                    </a>
                  </li>
                </ul>
                <div className={s.line}></div>
              </div>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <a className={s.nav__link} href="#section-2">
                    Phones
                  </a>
                </li>
              </ul>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <a className={s.nav__link} href="#section-3">
                    Tablets
                  </a>
                </li>
              </ul>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <a className={s.nav__link} href="#section-4">
                    Accessories
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={s.header__top}>
            <div className={s.top_img}>
              <a href="#header">
                <div className={s.container_img}>
                  <img
                    className={s.heart}
                    src={require('../../images/heart.png')}
                    alt="heart"
                  />
                </div>
              </a>
              <a href="">
                <div className={s.container_img}>
                  <img
                    className={s.bucket}
                    src={require('../../images/bucket.png')}
                    alt="bucket"
                  />
                </div>
              </a>
            </div>
            <div className={s.container_cart}>
              <a href="#menu">
                <img
                  className={s.cart}
                  src={require('../../images/cart.png')}
                  alt="Сart"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <BurgerMenu />
    </>
  );
}
