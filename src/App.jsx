import './App.css';
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}></Route>
          </Routes>    
        </CartProvider>    
      </BrowserRouter>
    </>
  );
}

export default App;
