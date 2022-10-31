import React, { 
  useEffect, 
  useState,
} from 'react';
import './App.css';
import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';

export const App: React.FC = () =>  {
  const [products, setProducts] = useState<Iphones[] | []>([]);

  useEffect(() => {
    async function getProductsFromServer() {
      try {
        const allIphones = await getAllProducts();
        setProducts(allIphones);
      } catch(error) {
        console.log(error);
      }
    }

    getProductsFromServer();
  },[]);

  return (
    <p>{products.map((pr) => (
      <h2>{pr.category}</h2> // eslint-disable-line react/jsx-key
    ))}</p>
  );
};

export default App;
