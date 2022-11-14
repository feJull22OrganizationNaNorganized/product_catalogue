import React from 'react';
import { Iphones } from '../../types/Iphones';
import './cartItem.scss';

type Props = {
  items: Iphones;
}
export const CartItem: React.FC<Props> = ({ items }) => {
  return (
    <div className="cartCard" style={{ padding: '0 20px' }}>
      <a
        href=""
        className="remove"
      >
        {' '}
        <img src={require('./images/close.png')} alt="" />{' '}
      </a>
      <img
        src={require('./images/image 8.png')}
        alt=""
        className="phoneImg"
      />
      <p className="phoneText">
        {items.name}
      </p>
    </div>
  );
};

