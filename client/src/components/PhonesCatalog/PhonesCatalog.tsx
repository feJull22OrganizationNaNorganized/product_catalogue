import React from 'react';
import './PhonesCatalog.scss';
import { PhonePhages } from '../PhonePages/PhonePhages';
import { Iphones } from '../../types/Iphones';
import { Pagination } from './Pagination';

type Props = {
  currentIphones: Iphones[];
  phonesPerPage: number;
  handlePaginate: (param: number) => void;
  products: Iphones[];
};

export const PhonesCatalog: React.FC<Props> = ({ currentIphones, phonesPerPage, handlePaginate, products }) => {
  return (
    <section className="phones">
      <div className="container">
        <div className="phones__content">
          <h1 className="phones__title">Mobile Phones</h1>
          <div className="phones__cards">
            <PhonePhages
              currentIphones={currentIphones} 
              products={products}
              phonesPerPage={phonesPerPage}
              handlePaginate={handlePaginate}/>
          </div>
        </div>
      </div>

    </section>
  );
};