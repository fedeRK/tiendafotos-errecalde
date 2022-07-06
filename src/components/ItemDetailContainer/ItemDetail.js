import '../../index.css';


export default function ItemDetail( {zapato}) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl m-5">{zapato.title}</h1>
        <img className=" flex-wrap rounded-t-lg" src={zapato.pictureURL}/>
        <p className='m-2'>{zapato.description}</p>
        <h2 className="text-3xl m-5">${zapato.price}</h2>
      </div>
    );
  }