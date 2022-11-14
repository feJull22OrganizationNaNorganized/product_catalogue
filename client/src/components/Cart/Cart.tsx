import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Iphones } from '../../types/Iphones';
import './Cart.scss';
import { CartItem } from './CartItem';

type Props = {
  orderCart: Iphones[];
  setOrderCart: Dispatch<SetStateAction<Iphones[]>>;
}

export const Cart: React.FC<Props> = ({ orderCart, setOrderCart}) => {
  return (
    <div className='cart__content'>
      <Link to="/product_catalogue">
        <a href="">
          <img
            src={require('./images/arrow.png')}
            alt="back arrow"
            className="arrow"
          />
        </a>
        <p className="back_item" style={{color: '#000'}}>Back</p>
      </Link>
      <p className="cart_item">Cart</p>
      <div className="cart__box">
        {orderCart.map((item) => (
          <li key={item.id} className='cart__list'>
            <CartItem 
              items={item} 
            />
          </li>
        ))}
        {orderCart.length > 0 && ( <div className="buttomCard">
          <div className="buttomCard__totalPrice">
            <p className="totalPrice">2000$</p>
            <p className="totalItems">Total for {orderCart.length} items</p>
          </div>
          <div>
          </div>
          <div className="buttonContainer">
            <button className="buttonCheckout">Checkout</button>
          </div>
        </div>)}
      </div>
    </div>

  );
};

