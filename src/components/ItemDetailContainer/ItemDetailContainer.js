import { useState, useEffect } from "react";
import zapatos from "../../data/zapatos"
import ItemDetail from "./ItemDetail";
import BarLoader from "react-spinners/BarLoader";
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(zapatos);
    }, 2000);
  });

export default function ItemDetailContainer () {

  const {itemId} = useParams();


    const [zapatoItem, setZapatoItem] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      promesa.then((data) =>{
      const getData = data[itemId]
      setZapatoItem(getData)
      setLoading(false)
      }).catch(() =>{
          console.log('todo mal')
      })
  }, [itemId]);

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