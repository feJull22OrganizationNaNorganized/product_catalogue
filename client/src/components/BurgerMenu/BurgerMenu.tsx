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
        <img
          src={require('../../images/Close.png')}
          alt="close"
          onClick={() => handleChangeOpen()}
        />
      </div>
      <Link to='/'>aa</Link>
    </div>
  );
};
