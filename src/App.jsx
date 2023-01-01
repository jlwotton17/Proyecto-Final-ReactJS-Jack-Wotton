import './App.css';
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer />}></Route>
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
