import React from 'react';
import { Iphones } from '../../types/Iphones';
import { PhoneCard } from '../PhoneCard/PhoneCard';
import { Pagination } from '../PhonesCatalog/Pagination';
import '../PhonesCatalog/PhonesCatalog.scss';

type Props = {
  products: Iphones[];
  phonesPerPage: number;
  handlePaginate: (param: number) => void;
  currentIphones: Iphones[];
}

export const PhonePhages: React.FC<Props> = ({ products, phonesPerPage, handlePaginate, currentIphones }) => {
  return (
    <div>
      <ul className="phones__cards">
        {currentIphones.map((item) => (
          <li className="phones__item" key={item.id}>
            <PhoneCard phone={item} />
          </li>
        ))}
      </ul >

      <Pagination
        products={products.length}
        phonesPerPage={phonesPerPage}
        handlePaginate={handlePaginate}
      />
    </div>
  );
};
