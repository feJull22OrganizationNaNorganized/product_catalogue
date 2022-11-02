/* eslint-disable linebreak-style */
import React from 'react';
import './BurgerMenu.scss';

export function BurgerMenu() {
  return (
    <nav className="page__menu menu" id="menu">
      <div className="container">
        <div className="menu__content">
          <div className="menu__container">
            <div className="images">
              <div className="nice_gadgets">
                <img
                  className="nice"
                  src={require('../../images/NiceGadgetsBlack.png')}
                  alt="footerLogo"
                />
              </div>
              <div className="img_hand_black">
                <img
                  className="hand_black"
                  src={require('../../images/hand_small.png')}
                  alt="hand_small"
                />
              </div>
            </div>
            <div className="close">
              <a href="#">
                <div className="container_img">
                  <img
                    className="icon_close"
                    src={require('../../images/Close.png')}
                    alt="Сart"
                  />
                </div>
              </a>
            </div>
          </div>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Home
              </a>
            </li>

            <li className="menu__item">
              <a href="#recommended" className="menu__link">
                Phones
              </a>
            </li>

            <li className="menu__item">
              <a
                href="#browse_bose_products_by_category"
                className="menu__link"
              >
                Tablets
              </a>
            </li>

            <li className="menu__item">
              <a href="#why_buy_direct_from_bose" className="menu__link">
                Accessories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }