import { useState } from 'react'

import MainRoutes from './routes/MainRoutes'

import { CartProvider } from './context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CartProvider>
      <MainRoutes />
    </CartProvider>
    );
}

export default App;
