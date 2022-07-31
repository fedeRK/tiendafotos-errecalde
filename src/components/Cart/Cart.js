import React, {useContext, useState} from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./cart.css"
import { TrashIcon } from '@heroicons/react/solid'



const Cart = () => {
    const {products, removeItem, clear, totalPrice} = useContext(CartContext);

    return (
        <>
            {products.length === 0 ?
            <>
            <h1>Carrito vacío, vuelve al <Link to="/"> inicio </Link></h1>
            </>
            : <> {products.map(product => 
            <div key={product.id} className="m-10 flex">
                <img className="h-10" src={product.pictureURL} alt={product.title}/>
                <p className="pt-2 ml-3">Modelo: {product.title} | Precio: ${product.price} | Cantidad: {product.qty}</p>
                <button className="rojo ml-3" onClick={()=> removeItem(product.id)}><TrashIcon className="h-5"/></button>
            </div>
            )}
            <p className="ml-5">TOTAL: ${totalPrice()}</p>
            <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"><Link to="../Form"> Pagar Aqui</Link></button>
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={()=> clear()}>Vaciar Carrito</button>
            </>}
        </>
    )
}

export default Cart