import React, {useContext} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';
import { CartContext } from '../../Context/CartContext';

const Cart =()=>{
    const {qtyProducts} = useContext (CartContext);

    return(
    <>
        <div className='carrito'>
            <ShoppingCartIcon/>
        </div>
        
        {qtyProducts>0 && <p>{qtyProducts}</p>}
    </>)}

export default Cart