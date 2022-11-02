import React from 'react';
import './Header.scss';
import { NavLink, Link } from 'react-router-dom';

export function Header() {

  const setActive = ({isActive}) => isActive ? 'is-active' : '';

  return (
    <div className="header">
      <div className="header__container">
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
                <NavLink className="nav__link" to="/" >Home
                </NavLink>
              </li>
            </ul>
            <div className='line'></div>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/product_catalogue" >Phones
              </NavLink>
            </li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="/tablets" >Tablets
              </NavLink>
            </li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to="*" >Accessories
              </NavLink>
            </li>
          </ul>
        </nav>
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
          <NavLink to="/">
            <div className="container_img">
              <img
                className="cart"
                src={require('../../images/Cart.svg')}
                alt="cart"
              />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
