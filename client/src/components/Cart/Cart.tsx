import React from 'react';
import { Link } from 'react-router-dom';
import { Iphones } from '../../types/Iphones';
import './Cart.scss';

export const Cart: React.FC = () => {
  return (
    <div  className='cart__content'>
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
              Apple iPhone 14 Pro 128GB Silver (MQ023)
            </p>
          </div>
          <div className="cartCard__coastAndCount">
            <a href="" className="minus"></a>
            <p className="countNumber">1</p>
            <a href="" className="plus"></a>
            <p className="phonePrice">$999</p>
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
    </div>

  );
};
