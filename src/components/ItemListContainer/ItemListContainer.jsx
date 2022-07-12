import { useState, useEffect } from "react";
import zapatos from "../../data/zapatos"
import ItemList from "./ItemList";
import BarLoader from "react-spinners/BarLoader";
import { useParams } from "react-router-dom";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(zapatos);
    }, 2000);
  });

  export default function ItemListContainer() {

    const {categoryName} = useParams();

    const [zapatosList, setzapatosList] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      console.log(categoryName)
        setLoading(true);

        promesa.then((data) =>{
          const getCategory = data.filter(data => data.category === categoryName)
          categoryName ? setzapatosList(getCategory) : setzapatosList(data) 
          setLoading(false)
          }).catch(() =>{
              console.log('salio mal')
          })
      }, [categoryName]);


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