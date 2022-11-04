import React from 'react';
import './PhonesCatalog.scss';
import { PhonePhages } from '../../components/PhonePages/PhonePages';
import { Iphones } from '../../types/Iphones';

type Props = {
  currentIphones: Iphones[];
  phonesPerPage: number;
  handlePaginate: (param: number) => void;
  products: Iphones[];
  nextPage: () => void;
  beforePage: () => void;
  currentPage: number;
};

export const PhonesCatalog: React.FC<Props> = ({ 
  currentIphones, 
  phonesPerPage, 
  handlePaginate, 
  products,
  nextPage,
  beforePage,
  currentPage,
}) => {
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
              handlePaginate={handlePaginate}
              nextPage={nextPage}
              beforePage={beforePage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>

    </section>
  );
};