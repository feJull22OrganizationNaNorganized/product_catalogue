import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>

  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //       <Route index element={<Home/>} />
  //       <Route path="/home" element={<Navigate to="/" replace />} />
  //       <Route path="product_catalogue" element={<PhonesCatalog />} />
  //       <Route path="/menu" element={< NotFound/>} />
  //       <Route path="/favorites" element={<NotFound />} />
  //       <Route path="/cart" element={<NotFound/>} />
  //       <Route path="*" element={<NotFound />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
);




