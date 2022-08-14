import React, {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [cuenta, setCuenta] = useState(initial)

    const sumar = () => {
      if (cuenta < stock ) {
        setCuenta(cuenta + 1)
      }      
    }
    const restar = () => {
      if (cuenta > 0) {
      setCuenta(cuenta - 1)
      }
    }
    const clickAddToCart = () => {
      onAdd(cuenta);
    }

    return (
      <>
        <div className='flex gap-6 p-6 font-bold text-xl ml-5 '>
          <button className='flex' onClick={restar}>-</button>
          <p>{cuenta}</p>
          <button onClick={sumar}>+</button>
        </div>
        <button className="mx-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> clickAddToCart()}>Agregar al Carrito</button>
      </>
    )
  }

export default ItemCount