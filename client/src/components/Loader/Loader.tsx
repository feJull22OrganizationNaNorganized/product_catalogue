import React from 'react';
import './Loader.scss';

export const Loader: React.FC = () => {
  return (
    <div className='loader'>
      <img className="loader__image" src={require('../../images/iphone.png')} />
    </div>

  );
};