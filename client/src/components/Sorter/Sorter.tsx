import React from 'react';

import './Sorter.scss';

export const Sorter:React.FC = () => {

  return (
    <section className="sorter">
      <span>95 models</span>
      <div className="sorter__dropdowns">
        <div className="sorter__dropdowns--sort">
          <label htmlFor="sort">Sort by</label>  
          <select name="sort" id="sort">
            <option className="new">Newest</option>
            <option className="old">Oldest</option>
            <option className="high">High Price</option>
            <option className="low">Low Price</option>
          </select>
        </div>

        <div className="sorter__dropdowns--per-page">
          <label htmlFor="per-page">Items on page</label>  
          <select name="sort" id="per-page">
            <option className="16">16</option>
            <option className="12">12</option>
            <option className="8">8</option>
          </select>
        </div> 
          
      </div>
    </section>
  );
};