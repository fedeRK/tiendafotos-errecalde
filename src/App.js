import React, {useState} from 'react';
import Navbar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div>
      <Navbar />
      <h1 className='m-5 text-lg font-semibold	'>Productos:</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;

