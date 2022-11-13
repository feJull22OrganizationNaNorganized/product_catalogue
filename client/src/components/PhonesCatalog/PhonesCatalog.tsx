import React, { Dispatch, SetStateAction } from 'react';
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
  setPhonesPerPage: (param: number) => void;
  setOrderCart:Dispatch<SetStateAction<Iphones[]>>
};

export const PhonesCatalog: React.FC<Props> = ({
  currentIphones,
  phonesPerPage,
  handlePaginate,
  products,
  nextPage,
  beforePage,
  currentPage,
  setPhonesPerPage,
  setOrderCart,
}) => {
  return (
    <section className="phones">
      <div className="container">
        <div className="phones__content">
          <div className="phones__container">
            <h1 className="phones__title">Mobile Phones</h1>
            <p className='phones__subtitle'>{products.length} models</p>
            <p className='phones__count-title'>Items on page</p>
            <select
              className='select-count'
              onChange={((event) => setPhonesPerPage(+event?.target.value))}
            >
              <option className="select-count__item">
                4
              </option>
              <option className="select-count__item">
                8
              </option>
              <option className="select-count__item">
                12
              </option>
              <option className="select-count__item" selected>
                16
              </option>
            </select>
          </div>
          <div className="phones__cards">
            <PhonePhages
              currentIphones={currentIphones}
              products={products}
              phonesPerPage={phonesPerPage}
              handlePaginate={handlePaginate}
              nextPage={nextPage}
              beforePage={beforePage}
              currentPage={currentPage}
              setOrderCart={setOrderCart}
              
            />
          </div>
        </div>
      </div>

    </section>
  );
};