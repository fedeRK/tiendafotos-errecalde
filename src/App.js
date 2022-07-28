import React from 'react';
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import Form from './components/Form/Form';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CustomProvider from './Context/CartContext'

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryName' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Form' element={<Form />} />
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  );
}

export default App;

