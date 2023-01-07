/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';
import { RemoveScroll } from 'react-remove-scroll';

type Props = {
  handleChangeOpen: () => void;
  open: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ handleChangeOpen, open }) => {
  return (
    <>
      <RemoveScroll>
        <div className='hi' id='#menu' style={{ overflow: 'auto' }}>
          <div className='for-burger'>
            <img src={require('../../images/Nice_Gadgets.png')} alt="nice" />
            <img
              className='x'
              src={require('../../images/Close.png')}
              alt="close"
              onClick={() => handleChangeOpen()} />
          </div>
          <div className='burger-list'>
            <Link
              to='/'
              className='burger_item'
              onClick={() => handleChangeOpen()}
            >Home</Link>
            <Link
              to='/product_catalogue'
              className='burger_item'
              onClick={() => handleChangeOpen()}
            >Phones</Link>
            <Link
              to='/tablets '
              className='burger_item'
              onClick={() => handleChangeOpen()}
            >tablets</Link>
            <Link
              to='/Accessories'
              className='burger_item'
              onClick={() => handleChangeOpen()}
            >accessories</Link>
          </div>

          <div className=' bottom-burger'>
            <img className='bootem-item' src={require('../../images/heart.png')} alt="heart" />
            <Link to='/cart' onClick={() => handleChangeOpen()}>
              <img src={require('../../images/bucket.png')} alt="backet" />
            </Link>
          </div>
        </div>
      </RemoveScroll></>
  );
};
