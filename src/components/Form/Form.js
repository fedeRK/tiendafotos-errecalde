import { useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {db} from '../../firebase/firebase'
import {addDoc, collection, serverTimestamp, getDocs, query, orderBy, limit} from 'firebase/firestore'
import { Link } from "react-router-dom"


const Form = ()=>  {
    const {products, totalPrice, clear} = useContext(CartContext);

    const formulario = {
        name:'',
        email:'',
        phone:'',
        creditCard:''
    }
    const [orderId, setOrderId] = useState(null);

    const [datos, setDatos] = useState(formulario)

    const capturarDatos = (e)=> {
        const {name, value} = e.target;
        setDatos({...datos, [name]:value})}

    const guardarDatos = async(e)=>{
        e.preventDefault();
        try {
            await addDoc (collection(db,'ventas'),{
                ...datos, 
                items: products, 
                price:totalPrice(), 
                date: serverTimestamp()
            })

            const q = query(collection(db, "ventas"), orderBy("date", "desc"), limit(1));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setOrderId(doc.id);
            });


            
            clear();

        } catch (error) {
            console.log(error);
        }

        setDatos({...formulario})
    }
    

if (orderId){
  return(
        <>
        <div className="py-5 text-center mt-5">
            <h2 className="mt-5">¡Gracias por elegirnos!</h2>
            <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
            <strong>El numero de tu orden es {orderId}</strong> <br/>
            <Link className="btn btn-outline-primary m-3" to={`/`}>
            <p className="text-red-600">Volver al Inicio</p>
            </Link>
        </div>
    </>)}

    return (
        <>
        <h1>Formulario de Pago</h1>
        <form onSubmit={guardarDatos}>
            <input name="name" className="form-control"
            placeholder="Ingrese su Nombre"
            type="text" onChange={capturarDatos} value={datos.formName} required/>
            <input name= "email" className="form-control"
             placeholder="Ingrese su Email"
             type="email" onChange={capturarDatos} value={datos.formEmail} required/>
            <input name="phone" className="form-control"
            placeholder="Telefono de contacto"
            type="number" onChange={capturarDatos} value={datos.formPhone} required/>
            <input name="creditCard" className="form-control"
            placeholder="Ingrese el numero de Tarjeta"
            type="number" onChange={capturarDatos} value={datos.formCard} required/>
            <button className='form-submit'>Pagar Ahora</button>
        </form>
    </>
    )

}


export default Form
