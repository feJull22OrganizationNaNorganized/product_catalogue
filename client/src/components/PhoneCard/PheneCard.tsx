import React from 'react';
import './PhoneCard.scss';
import iphone from '../../images/iphone.png';

export const PhoneCard: React.FC = () => {
  return (
    <section className="card">
      <div className="card__content">
        <img 
          src={iphone}
          className="card__image"
          alt="iphone"
        />
        <div className="card__name">
          Apple iPhone 11 128GB Purple (iMT9G2FS/A)
        </div>
        <div className="card__price">
          <div className="card__price-new">$799</div>
          <div className="card__price-old">$899</div>
        </div>
        <div className="card__characteristics">
          <div className="card__description">
            <div className="card__description-title">Screen</div>
            <div className="card__description-value">6.2” IPS</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">Capacity</div>
            <div className="card__description-value">128 GB</div>
          </div>
          <div className="card__description">
            <div className="card__description-title">RAM</div>
            <div className="card__description-value">4 GB</div>
          </div>
        </div>
        <div className="card__buttons">
          <a href="/" className="card__cart">
            Add to cart
          </a>
          <a href="/" className="card__link">
            <svg className="card__heart" width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.62852 0.631417C10.1584 0.411843 10.7264 0.298828 11.3 0.298828C11.8737 0.298828 12.4416 0.411843 12.9716 0.631417C13.5015 0.850991 13.983 1.17282 14.3885 1.57852C14.7941 1.98398 15.1158 2.46537 15.3353 2.99519C15.5549 3.52511 15.6679 4.0931 15.6679 4.66671C15.6679 5.24032 15.5549 5.80831 15.3353 6.33824C15.1158 6.86811 14.794 7.34953 14.3884 7.75502C14.3883 7.75506 14.3884 7.75498 14.3884 7.75502L8.49502 13.6484C8.22165 13.9217 7.77844 13.9217 7.50507 13.6484L1.61174 7.75502C0.792668 6.93595 0.33252 5.82505 0.33252 4.66671C0.33252 3.50837 0.792668 2.39747 1.61174 1.5784C2.43081 0.759334 3.54171 0.299185 4.70005 0.299185C5.85839 0.299185 6.96928 0.759334 7.78835 1.5784L8.00005 1.7901L8.21162 1.57852C8.21166 1.57848 8.21158 1.57856 8.21162 1.57852C8.61711 1.17288 9.09865 0.85097 9.62852 0.631417ZM13.3983 2.56824C13.1228 2.29261 12.7957 2.07396 12.4357 1.92479C12.0756 1.77561 11.6898 1.69883 11.3 1.69883C10.9103 1.69883 10.5245 1.77561 10.1644 1.92479C9.80441 2.07396 9.4773 2.29261 9.2018 2.56824L8.49502 3.27502C8.22165 3.54839 7.77844 3.54839 7.50507 3.27502L6.7984 2.56835C6.24189 2.01183 5.48708 1.69918 4.70005 1.69918C3.91301 1.69918 3.15821 2.01183 2.60169 2.56835C2.04517 3.12487 1.73252 3.87967 1.73252 4.66671C1.73252 5.45375 2.04517 6.20855 2.60169 6.76507L8.00005 12.1634L13.3984 6.76507C13.674 6.48957 13.8928 6.16235 14.042 5.80233C14.1911 5.4423 14.2679 5.05642 14.2679 4.66671C14.2679 4.27701 14.1911 3.89112 14.042 3.5311C13.8928 3.17107 13.6739 2.84374 13.3983 2.56824Z" fill="#0F0F11"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};