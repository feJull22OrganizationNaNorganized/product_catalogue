import { 
  useEffect, 
  useState,
} from 'react';
import React from 'react';
import './App.css';
<<<<<<< HEAD:client/src/App.tsx
function App() {
  return <p>hello YURII</p>;
}
export default App;
=======
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

  return (<h1></h1>);
};


>>>>>>> 81ed88a54335fa0562ca45dbff8c7576ff1fb2ef:client/my-app/src/App.tsx
