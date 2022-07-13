import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import ItemCount from "../ItemCount";



export default function ItemDetail({zapato}) {

    const [finalized, setFinalized] = useState(false)

    const onAdd = (cuenta) => {
      setFinalized(true);
      console.log(`Se agregaron ${cuenta} modelo ${zapato.title} al carrito`);
    };

    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl m-5">{zapato.title}</h1>
        <img className=" flex-wrap rounded-t-lg" src={zapato.pictureURL} alt={zapato.title}/>
        <p className='m-2'>{zapato.description}</p>
        <h2 className="text-3xl m-5">${zapato.price}</h2>
      {!finalized ? (<ItemCount stock={10} initial={1} onAdd={onAdd}/>) : (<Link to="/cart"><button>Finalizar Compra</button></Link>)}

        

      </div>
    );
  }