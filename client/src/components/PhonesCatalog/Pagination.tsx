import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss';

type Props = {
  phonesPerPage: number;
  products: number;
  handlePaginate: (param: number) => void;
  nextPage: () => void;
  beforePage: () => void;
  currentPage: number;
}

export const Pagination: React.FC<Props> = ({ 
  phonesPerPage,
  products, 
  handlePaginate,
  nextPage,
  beforePage,
  currentPage,
}) => {
  const pageCount = products / phonesPerPage;
  const PageNumbers = [];

  for (let i = currentPage; (i < currentPage + 4) && (i <= pageCount + 1); i++) {
    PageNumbers.push(i);
  }

  return (
    <>
      <ul 
        className='pagination pagination__list'
      >
        <img
          className={(currentPage > 1) ? 'pagination__image' : 'disabled'}

          src={require('../../images/arrow.jpg')}
          alt="arrow"
          onClick={beforePage}
        />
        {PageNumbers.map((number) => (
          (<li key={number}>
            <Link 
              className={currentPage === number ? 'active-pagination'
                : 'pagination__link'}
              to="#"
              onClick={() => handlePaginate(number)}
            >
              { <p>{number}</p>}
            </Link>
          </li>
          )
        ))}
        <img
          className={!(currentPage >= pageCount) ? 'pagination__image' : 'disabled'}

          src={require('../../images/arrowBack.jpg')}

          alt="arrow image"
          onClick={nextPage}
        />
      </ul>
    </>
  );
};
