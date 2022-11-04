/*eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { useEffect, useState } from 'react';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';
import { Route, Routes } from 'react-router';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Iphones[]>([]);

  async function getProductsFromServer() {
    try {
      const allIphones = await getAllProducts();
      setProducts(allIphones);
    } catch (error) {
      throw new Error('Loading phones from server Error');
    }
  }

  useEffect(() => {
    getProductsFromServer();
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        {/* <Routes> */}
        {/* <Route path=''> */}
        <PhonesCatalog />
        {/* </Route> */}
        {/* </Routes> */}
      </main>
      <Footer />
    </>
  );
};
