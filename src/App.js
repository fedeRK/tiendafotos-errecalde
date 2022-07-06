import React, {useState} from 'react';
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import {BrowserRouter, Routes, Route} from "react-router-dom";
 */
function App() {
  return (
    <>
        <Navbar />
        <h1 className='m-5 text-lg font-semibold	'>Productos:</h1>
        <ItemListContainer />
        <ItemDetailContainer />      
    </>
  );
}

export default App;

