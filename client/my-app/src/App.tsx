import {
  useEffect,
  useState,
} from 'react';
import React from 'react';
import './App.css';
import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';
import { Loader } from './loader/loader';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Iphones[] | []>([]);
  const [errorReq, setErrorReq] = useState('');

  useEffect(() => {
    async function getProductsFromServer() {
      try {
        const allIphones = await getAllProducts();
        setProducts(allIphones);
      } catch (error) {
        setErrorReq(`${error}`);
      }
    }

    getProductsFromServer();
  }, []);

  return (
    <div>
      {errorReq && (
        <Loader />
      )}
    </div>
  );
};


