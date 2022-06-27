import React, {useState} from 'react'

const ItemCount = ({stock, initial = 0}) => {

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

    const onAdd = () => {
      if(cuenta >= 1)
      alert (`Gracias por su compra`)
    }

  return (
    <>
      <div className='flex gap-6 p-6 font-bold text-xl'>
        <button className='flex' onClick={restar}>-</button>
        <p>{cuenta}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button className='mx-5 rounded-lg bg-red-500 p-3 text-white' onClick={onAdd}>Comprar</button>
    </>
  )
}

export default ItemCount