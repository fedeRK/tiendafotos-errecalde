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
        <div class="flex justify-center w-full bg-blue-400">
    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h1 className="mb-5">Formulario de Pago</h1>
        <form onSubmit={guardarDatos} className="d-flex">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Nombre</label>
            <input name="name" className="form-control mb-2"
            placeholder="Ingrese su Nombre"
            type="text" onChange={capturarDatos} value={datos.formName} required/>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">E-mail</label>
            <input name= "email" className="form-control mb-2"
             placeholder="Ingrese su Email"
             type="email" onChange={capturarDatos} value={datos.formEmail} required/>
             <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Teléfono</label>
            <input name="phone" className="form-control mb-2"
            placeholder="Telefono de contacto"
            type="number" onChange={capturarDatos} value={datos.formPhone} required/>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Tarjeta de Crédito</label>
            <input name="creditCard" className="form-control mb-5 block"
            placeholder="Ingrese el numero de Tarjeta"
            type="number" onChange={capturarDatos} value={datos.formCard} required/>
            <button className='form-submit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Finalizar Compra</button></Link>  <Link to="/"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Pagar Ahora</button>
        </form>
        </div>
        </div>
    </>
    )

}


export default Form
