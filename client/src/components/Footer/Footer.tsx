/* eslint-disable linebreak-style */
// import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Footer.module.scss';
import '../../styles/index.scss';
// import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.container__center}>
        <div className={s.footer__container}>
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
          <div className={s.contacts}>
            {/* <NavLink to="#" className={s.contacts__info}>
              Github
            </NavLink>
            <NavLink to="#" className={s.contacts__info}>
              Contacts
            </NavLink>
            <NavLink to="#" className={s.contacts__info}>
              Rights
            </NavLink> */}
            <div className={s.contacts__info}>Github</div>
            <div className={s.contacts__info}>Contacts</div>
            <div className={s.contacts__info}>Rights</div>
          </div>
         
          <div className={s.to_top}>
            <div className={s.top}>Back to top</div>
            <a href="#header">
              <div className={s.img_top}>
                <div className={s.container_circle}>
                  <img
                    className={s.rectangle}
                    src={require('../../images/Rectangle.png')}
                    alt="rectangle"
                  />
                  <img
                    className={s.vector}
                    src={require('../../images/Vector.png')}
                    alt="vector"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
