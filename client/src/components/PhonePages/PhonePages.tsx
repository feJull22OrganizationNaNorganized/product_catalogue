import React, { Dispatch, SetStateAction, useState } from 'react';
import { Iphones } from '../../types/Iphones';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Pagination } from '../PhonesCatalog/Pagination';
import '../PhonesCatalog/PhonesCatalog.scss';

type Props = {
  products: Iphones[];
  phonesPerPage: number;
  handlePaginate: (param: number) => void;
  currentIphones: Iphones[];
  nextPage: () => void;
  beforePage:() => void;
  currentPage: number;
  setOrderCart: Dispatch<SetStateAction<Iphones[]>>
}

export const PhonePhages: React.FC<Props> = ({ 
  products, 
  phonesPerPage, 
  handlePaginate, 
  currentIphones, 
  nextPage,
  beforePage,
  currentPage,
  setOrderCart,
}) => {
  //const [orderCart, setOrderCart] = useState<Iphones[]>([]);

  //console.log(orderCart);
  return (
    <div>
      <ul className="phones__cards">
        {currentIphones.map((item) => (
          <li className="phones__item" key={item.id}>
            <PhoneCard 
              phone={item}
              setOrderCart={setOrderCart}
            />
          </li>
        ))}
      </ul >

      <Pagination
        products={products.length}
        phonesPerPage={phonesPerPage}
        handlePaginate={handlePaginate}
        nextPage={nextPage}
        beforePage={beforePage}
        currentPage={currentPage}
      />
    </div>
  );
};
