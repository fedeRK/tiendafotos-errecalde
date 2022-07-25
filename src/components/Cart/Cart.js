import React, {useContext} from "react"
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
            <div key={product.id} className="m-10">
                <img className="h-10" src={product.pictureURL} alt={product.title}/>
                <p >Modelo: {product.title} | Precio: ${product.price} | Cantidad: {product.qty}</p>
                <button className="rojo" onClick={()=> removeItem(product.id)}><TrashIcon className="h-5"/>Borrar Producto</button> <hr/>
            </div>
            )}
            <p className="ml-5">TOTAL: ${totalPrice()}</p>
            <button className="rojo ml-5" onClick={()=> clear()}>Vaciar Carrito</button>
            </>}
        </>
    )
}

export default Cart