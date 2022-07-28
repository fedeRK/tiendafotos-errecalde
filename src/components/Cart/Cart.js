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
            <button><Link to="../Form"> Pagar Aqui</Link></button>
            <button className="rojo ml-5" onClick={()=> clear()}>Vaciar Carrito</button>
            </>}
        </>
    )
}

export default Cart