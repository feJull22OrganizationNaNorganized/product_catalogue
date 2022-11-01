import {
  useEffect,
  useState,
} from 'react';
import React from 'react';
import './App.css';
import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';
import { Badrequest } from './404/404';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Iphones[]>([]);
  const [errorReq, setErrorReq] = useState('');

  async function getProductsFromServer() {
    try {
      const allIphones = await getAllProducts();
      setProducts(allIphones);
    } catch (error) {
      setErrorReq(`${error}`);
    }
  }

  useEffect(() => {
    getProductsFromServer();
  }, []);

  return (
    <div>
      {errorReq && (
        <Badrequest />
      )}
    </div>
  );
};


