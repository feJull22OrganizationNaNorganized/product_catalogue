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
import { Header } from './components/Header/Header';

export const App: React.FC = () =>  {
  const [products, setProducts] = useState<Iphones[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage] = useState(16);

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
      <Header />
      <Routes>
        {/* <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='product_catalogue' element={<PhonesCatalog 
            currentIphones={currentIphones} 
            phonesPerPage={phonesPerPage}
            handlePaginate={handlePaginate}
            products={products}
            nextPage={nextPage}
            beforePage={beforePage}
            currentPage={currentPage}
          />} />
          <Route index element={<Tablets/>}/>
          <Route path='*' element={<NotFound />} />
        </Route> */}

        <Route index element={<Home/>} />
        {/* <Route path="/home" element={<Navigate to="/" replace />} />  */}
        
        <Route path="product_catalogue" element={<PhonesCatalog 
          currentIphones={currentIphones} 
          phonesPerPage={phonesPerPage}
          handlePaginate={handlePaginate}
          products={products}
          nextPage={nextPage}
          beforePage={beforePage}
          currentPage={currentPage}/>} /> 
     
        <Route path="/menu" element={< NotFound/>} />
        <Route path="/favorites" element={<NotFound />} />
        <Route path="/cart" element={<NotFound/>} />
        <Route index element={<Tablets/>}/>
      </Routes>
      <Footer />
    </>
  );
};
