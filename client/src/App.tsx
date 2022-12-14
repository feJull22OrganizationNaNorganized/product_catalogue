/*eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { useEffect, useState } from 'react';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';
import { Tablets } from './components/Tablets/Tablets';
import { NotFound } from './components/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
import './styles/index.scss';

import './Utilities/normalize.css';
import './Utilities/reset.css';
import './Utilities/normalize.css';
import './Utilities/reset.css';
import { Loader } from './components/Loader/Loader';


export const App: React.FC = () => {
  const [products, setProducts] = useState<Iphones[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(16);
  const [orderCart, setOrderCart] = useState<Iphones[]>([]);

  console.log(orderCart);

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



  const lastIphonesIndex = currentPage * phonesPerPage;
  const firstIphonesIndex = lastIphonesIndex - phonesPerPage;
  const currentIphones = products.slice(firstIphonesIndex, lastIphonesIndex);
  const pageCount = products.length / phonesPerPage;

  const handlePaginate = (PageNumber: number) => setCurrentPage(PageNumber);
  const nextPage = () => currentPage < pageCount ? setCurrentPage(prev => prev + 1)
    : setCurrentPage(prev => prev);
  const beforePage = () => currentPage > 1 ? setCurrentPage(prev => prev - 1)
    : setCurrentPage(prev => prev);

  console.log(location);

  return (
    <>
      <div className="wrapper">
        <header className="header">
          {products.length > 0 && (<Header />)}
        </header>
        <main className="main">
          <Routes>
            <Route index element={<Home />} />
            <Route path="product_catalogue" element={products.length ? (
              <PhonesCatalog
                setPhonesPerPage={setPhonesPerPage}
                currentIphones={currentIphones}
                phonesPerPage={phonesPerPage}
                handlePaginate={handlePaginate}
                products={products}
                nextPage={nextPage}
                beforePage={beforePage}
                currentPage={currentPage}
                setOrderCart={setOrderCart}
              />
            ) : (<Loader />)} />
            <Route path="/menu" element={< NotFound />} />
            <Route path="/favorites" element={<NotFound />} />
            <Route path="/cart" element={<Cart
              orderCart={orderCart}
              setOrderCart={setOrderCart}
            />} />
            <Route index element={<Tablets />} />
            <Route path='*' element={<NotFound />} />
            <Route index element={<Tablets />} />
          </Routes>
        </main>
        <footer className="footer">
          {products.length && (<Footer />)}
        </footer>

      </div>

    </>
  );
};
