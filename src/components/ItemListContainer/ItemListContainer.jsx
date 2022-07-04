import { useState, useEffect } from "react";
import zapatos from "../../data/zapatos"
import ItemList from "./ItemList";
import BarLoader from "react-spinners/BarLoader";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(zapatos);
    }, 2000);
  });

  export default function ItemListContainer() {

    const [zapatosList, setzapatosList] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
          setLoading(false);
          setzapatosList(response);
        });
      }, []);
    
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
          <h2 className="flex justify-center mt-50">Tienda en Construcción</h2>
          <ItemList zapatos={zapatosList} />
        </div>
      );
    }