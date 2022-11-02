import React from 'react';
import './Pagination.scss';


type Props = {
  phonesPerPage: number;
  products: number;
  handlePaginate: (param: number) => void;
}

export const Pagination: React.FC<Props> = ({ phonesPerPage, products, handlePaginate}) => {
  const PageNumbers = [];

  for (let i = 1; i <= Math.ceil(products / phonesPerPage); i++) {
    PageNumbers.push(i);
  }
  console.log(PageNumbers);

  return (
    <>
      <ul className='pagination pagination__list'>
        {PageNumbers.map(number => (
          <li key={number}>
            <a 
              className='pagination__link'
              href="#"
              onClick={() => handlePaginate(number)}
            >
              <p>{number}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
