/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';

type Props = {
  handleChangeOpen: () => void;
}

export const BurgerMenu: React.FC<Props> = ({ handleChangeOpen }) => {
  return (
    <div className='hi'>
      <div className='for-burger'>
        <img src="../../images/NiceGadgets.png" alt="nice" />
        <img
          src={require('../../images/Close.png')}
          alt="close"
          onClick={() => handleChangeOpen()}
        />
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
        <img className='bootem-item' src="../../images/heart.png" alt="heart" />
        <img  src="../../images/backet.png" alt="backet" />

      </div>
    </div>
  );
};
