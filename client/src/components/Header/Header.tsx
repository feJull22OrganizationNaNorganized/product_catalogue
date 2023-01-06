import React from 'react';
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
import { PageNavLink } from '../PageNavLink/PageNavLink';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

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
            <nav className={s.nav}>
              <div className={s.active}>
                <ul className={s.nav__list}>
                  <li className={s.nav__item}>
                    <PageNavLink to="/" text="home" />
                  </li>
                </ul>
                <div className={s.line}></div>
              </div>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <PageNavLink to="/product_catalogue" text="PHONES" />
                </li>
              </ul>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <PageNavLink to="/tablets" text="tablets" />
                </li>
              </ul>
              <ul className={s.nav__list}>
                <li className={s.nav__item}>
                  <PageNavLink to="/Accessories" text="Accessories" />
                </li>
              </ul>
            </nav>
          </div>
          <div className={s.header__rightside}>
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
                <div className={s.container_imgg}>
                  <Link to="/cart">
                    <img
                      className={s.bucket}
                      src={require('../../images/bucket.png')}
                      alt="bucket"
                    />
                  </Link>
                </div>
              </div>
              <Link to="/">
                <div className={s.container_imgg}>
                  <img
                    className={s.cart}
                    src={require('../../images/Cart.svg')}
                    alt="cart"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BurgerMenu />
    </>
  );
}
