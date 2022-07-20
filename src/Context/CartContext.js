import React, {createContext, useEffect, useState} from "react"

export const CartContext = createContext ();
const {Provider} = CartContext;        
const CustomProvider = ({children})=> {
    const [products, setProducts] = useState ([]);
    const [qtyProducts, setQtyProducts] = useState(0);

    const getQtyProducts = ()=>{
      let qty = 0;
      products.forEach (product => {qty += product.qty;});
      setQtyProducts(qty);
    }

    useEffect(()=>{
      getQtyProducts();
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
      }

      const removeItem = (id) => {
        setProducts(products.filter(product => product.id !== id));
      }
    
      const clear = ()=> {
        setProducts([]);
      }
    
      const isInCart = (id) => {
      }

      const totalPrice = () => {
        return products.reduce((acc, product) => acc + product.price*product.qty,0)
      }

            return (
                <Provider value={{products, addItem, removeItem, clear, qtyProducts, totalPrice}}>
                    {children}
                </Provider>
                )            
        }

export default CustomProvider