/*eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import {
  useEffect,
  useState,
} from 'react';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';
import { Tablets } from './components/Tablets/Tablets';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './components/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';

import { Routes, Route, Link} from 'react-router-dom';

import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';

export const App: React.FC = () =>  {
  const [products, setProducts] = useState<Iphones[]>([]);

  async function getProductsFromServer() {
    try {
      const allIphones = await getAllProducts();
      setProducts(allIphones);
    } catch(error) {
      throw new Error('Loading phones from server Error');
    }
  }

  useEffect(() => {
    getProductsFromServer();
  }, []);
  
  console.log(location);

  return (
    <>
      <Routes>
        
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product_catalogue' element={<PhonesCatalog />} />
          <Route index element={<Tablets/>}/>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
