import { 
  useEffect, 
  useState,
} from 'react';
import React from 'react';
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

  return (<p></p>);
};


