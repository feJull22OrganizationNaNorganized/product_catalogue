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
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
            <option value="high">High Price</option>
            <option value="low">Low Price</option>
          </select>
        </div>

        <div className="sorter__dropdowns--per-page">
          <label htmlFor="per-page">Items on page</label>  
          <select name="sort" id="per-page">
            <option value="16">16</option>
            <option value="12">12</option>
            <option value="8">8</option>
          </select>
        </div> 
          
      </div>
    </section>
  );
};