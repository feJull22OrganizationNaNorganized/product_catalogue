import React from 'react';
import { Link } from 'react-router-dom';
import { Iphones } from '../../types/Iphones';
import './Cart.scss';
import { CartItem } from './CartItem';

type Props = {
  orderCart: Iphones[];
}

export const Cart: React.FC<Props> = ({ orderCart }) => {
  console.log(orderCart);
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

        <p className="back_item">Back</p>
      </Link>
      <p className="cart_item">Cart</p>
      {orderCart.map((item) => (
        <li key={item.id}>
          <CartItem items={item} />
        </li>
      ))}

    </div>

  );
};

