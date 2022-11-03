import React, { useCallback } from 'react';
import { Iphones } from '../../types/Iphones';

type Props = {
  cartItem: Iphones;
  updateCart: (item: Iphones, newCount: number) => void;
}

export const Cart: React.FC<Props> = ({ cartItem, updateCart }) => {
  const {
    name,
    price,
  } = cartItem;

  let count = 0;
  // let { count = 1 } = cartItem;

  const handleAddButton = useCallback(() => {
    count++;
    updateCart(cartItem, count);
  }, []);

  const handleMinusButton = useCallback(() => {
    count--;
    updateCart(cartItem, count);
  }, []);

  const handleRemoveButton = useCallback(() => {
    updateCart(cartItem, count);
  }, []);
  return (
    <li >
      <button
        
        onClick={handleRemoveButton}
      >

      </button>
      <div >
        <img
          
          alt="iphone"
        />
      </div>
      <h3>
        {name} (MQ023)
      </h3>
      <div >
        <button
         
          onClick={handleMinusButton}
        >

        </button>
        <span >{count}</span>
        <button
         
          onClick={handleAddButton}
        >

        </button>
      </div>
      <span >
        {`$${price}`}
      </span>
    </li>
  );
};