import React from 'react';
import {
  useEffect,
  useState,
} from 'react';
import { Home } from './components/Home/Home';
import { PhonesCatalog } from './components/PhonesCatalog/PhonesCatalog';

import { Iphones } from './types/Iphones';
import { getAllProducts } from './api/iphones';

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
  },[]);

  const lastIphonesIndex = currentPage * phonesPerPage;
  const firstIphonesIndex = lastIphonesIndex - phonesPerPage;
  const currentIphones = products.slice(firstIphonesIndex, lastIphonesIndex);

  const handlePaginate = (PageNumber: number) => setCurrentPage(PageNumber);

  console.log(products);
  return (
    <>
      < PhonesCatalog 
        currentIphones={currentIphones} 
        phonesPerPage={phonesPerPage}
        handlePaginate={handlePaginate}
        products={products}
      />
    </>

  );
};
