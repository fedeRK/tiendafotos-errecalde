import { useState, useEffect } from "react";
import Macerata from "../../data/Macerata"
import ItemDetail from "./ItemDetail";
import BarLoader from "react-spinners/BarLoader";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(Macerata);
    }, 2000);
  });

export default function ItemDetailContainer () {

    const [zapatoItem, setZapatoItem] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
          setLoading(false);
          setZapatoItem(response);
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
          <ItemDetail zapato={zapatoItem} />
        </div>
      );
    }