import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import BarLoader from "react-spinners/BarLoader";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import {getDocs, collection, query, where} from "firebase/firestore";



  export default function ItemListContainer() {

    const {categoryName} = useParams();

    const [zapatosList, setzapatosList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const productCollection = collection(db, 'productos');
      const q = query(productCollection, where('category',"==", `${categoryName}`));
      let useQ = {};

      categoryName ? useQ = q : useQ = productCollection

      getDocs(useQ)
      .then(result => {
        const lista = result.docs.map(doc =>{
          return {
            id: doc.id,
            ...doc.data(),
          }
        })
        setzapatosList (lista);
        setLoading(false);
      })
      },[categoryName]);

      if (loading) {
        return (          
            <BarLoader
                color="#40a37a"
                cssOverride={{}}
                height={4}
            />          
        );
      }
      return (
        <div>
          <ItemList zapatos={zapatosList} />
        </div>
      );
    }