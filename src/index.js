import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './styles/main.css'
import './styles/products/products.css'
import './styles/home/home.css'
import './styles/product-page/product-page.css'
import './styles/cart/cart.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

