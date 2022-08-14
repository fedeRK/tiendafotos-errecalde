import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import BarLoader from "react-spinners/BarLoader";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { getDoc, collection, doc } from "firebase/firestore";



export default function ItemDetailContainer () {

    const {itemId} = useParams();
    const [zapatoItem, setZapatoItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const productCollection = collection(db, "productos");
      const refDoc = doc(productCollection, itemId);
      getDoc(refDoc)
      .then(result => {
        const producto = {
          id: result.id,
          ...result.data(),
        }
        setZapatoItem(producto);
      })
      
      .catch(() => console.log("Algo salió mal"))
      .finally(()=> setLoading (false))
      },[itemId])

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
          <ItemDetail zapato={zapatoItem} />
        </div>
      );
    }