import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import ItemCount from "../ItemCount";
import {CartContext} from "../../Context/CartContext";


export default function ItemDetail({zapato}) {

    const [finalized, setFinalized] = useState(false)
    const { addItem } = useContext(CartContext)

    const onAdd = (cuenta) => {
      addItem({...zapato, qty: cuenta});
      setFinalized(true);
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl m-5">{zapato.title}</h1>
        <img className=" flex-wrap rounded-t-lg" src={zapato.pictureURL} alt={zapato.title}/>
        <p className='m-2'>{zapato.longDescription}</p>
        <h2 className="text-3xl m-5">${zapato.price}</h2>
      {!finalized ? (<ItemCount stock={10} initial={1} onAdd={onAdd}/>) : (<><Link to="/cart"><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Finalizar Compra</button></Link>  <Link to="/"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Seguir comprando</button></Link></>)}

        

      </div>
    );
  }