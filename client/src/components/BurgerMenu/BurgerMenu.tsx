/* eslint-disable linebreak-style */
import React from 'react';
import s from './BurgerMenu.module.scss';

export function BurgerMenu() {
  return (
    <nav className={s.page__menu} id="menu">
      <div className={s.container}>
        <div className={s.menu__content}>
          <div className={s.menu__container}>
            <div className={s.images}>
              <div className={s.nice_gadgets}>
                <img
                  className={s.nice}
                  src={require('../../images/NiceGadgetsBlack.png')}
                  alt="footerLogo"
                />
              </div>
              <div className={s.img_hand_black}>
                <img
                  className={s.hand_black}
                  src={require('../../images/hand_small.png')}
                  alt="hand_small"
                />
              </div>
            </div>
            <div className={s.close}>
              <a href="#header">
                <div className={s.container_img}>
                  <img
                    className={s.icon_close}
                    src={require('../../images/Close.png')}
                    alt="Сart"
                  />
                </div>
              </a>
            </div>
          </div>
          <ul className={s.menu__list}>
            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                Home
              </a>
            </li>

            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                Phones
              </a>
            </li>

            <li className={s.menu__item}>
              <a
                href="#"
                className={s.menu__link}
              >
                Tablets
              </a>
            </li>

            <li className={s.menu__item}>
              <a href="#" className={s.menu__link}>
                Accessories
              </a>
            </li>
          </ul>
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
        </div>
      </div>
    </nav>
  );
}
