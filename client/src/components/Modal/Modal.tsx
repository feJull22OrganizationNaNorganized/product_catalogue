import React from 'react';
import './Modal.scss';

export const Modal: React.FC = () => {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__content">
          <img
            className='modal__image-close'
            src={require('../../images/x.png')}
            alt="x"
          />
          <h2 className="modal__title">
            Lorem, ipsum dolor.
          </h2>
          <p className="modal__text">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};
