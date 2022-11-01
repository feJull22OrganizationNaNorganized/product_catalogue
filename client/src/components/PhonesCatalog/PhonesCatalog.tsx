import React from 'react';
import './PhonesCatalog.scss';
import { PhoneCard } from '../PhoneCard/PheneCard';

export const PhonesCatalog: React.FC = () => {
  return (
    <section className="phones">
      <div className="container">
        <div className="phones__content">
          <h1 className="phones__title">Mobile Phones</h1>
          <div className="phones__cards">
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
            <PhoneCard />
          </div>
        </div>
      </div>

    </section>
  );
};