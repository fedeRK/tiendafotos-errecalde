import React, {createContext, useEffect, useState} from "react"
import zapatos from "../data/zapatos";

export const CartContext = createContext ();
const {Provider} = CartContext;        
const CustomProvider = ({children})=> {
    const [products, setProducts] = useState ([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = ()=>{
      let qty = 0;
      products.forEach (product => qty += product.qty);
      setQtyProducts(qty);
    }

    useEffect(()=>{
      getQtyProducts();
console.log (products)
    }, [products]);

    const addItem = (product) => {
      if (isInCart(product.id)) {
        const found = products.find(p => p.id === product.id);
        const index = product.indexOf (found);
        const aux = [...products];
        aux[index].qty += product.qty;
        setProducts(aux);
      } else {
        setProducts ([...products, product]);
      }
        console.log ("se agrega un producto")
      }

      const removeItem = (id) => {
        setProducts(products.filter(product => product.id !== id));
        console.log("se elimina un producto")
      }
    
      const clear = ()=> {
        setProducts([]);
        console.log("se resetea el carrito");
      }
    
      const isInCart = (id) => {
        console.log ("verifica si esta en el carrito"); 
      }

            return (
                <Provider value={{products, addItem, removeItem, clear, qtyProducts}}>
                    {children}
                </Provider>
                )            
        }

export default CustomProvider