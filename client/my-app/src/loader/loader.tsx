import React from 'react';
import './loader.css';

export const Loader: React.FC = () => {
  return (
    <div className='box'>
      <div className='box__container'>
        <div className="lds-ring">
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>

  );
};