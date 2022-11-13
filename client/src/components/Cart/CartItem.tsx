import React from 'react';
import { Iphones } from '../../types/Iphones';
import './Cart.scss';

type Props = {
  items: Iphones;
}
export const CartItem: React.FC<Props> = ({ items }) => {
  return (
    <div className='structure'>
      <div className="cartCard">
        <div className="cartCard__phone">
          <a href="" className="remove">
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
        <div className="cartCard__coastAndCount">
          <a href="" className="minus"></a>
          <p className="countNumber">1</p>
          <a href="" className="plus"></a>
          <p className="phonePrice">{items.name}</p>
        </div>
      </div>

      <div className="buttomCard">
        <div className="buttomCard__totalPrice">
          <p className="totalPrice">$2345</p>
          <p className="totalItems">Total for 3 items</p>
        </div>
        <div>
        </div>
        <div className="buttonContainer">
          <button className="buttonCheckout">Checkout</button>
        </div>
      </div>
    </div>
  );
};