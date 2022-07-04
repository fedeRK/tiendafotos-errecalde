import ItemCount from "../ItemCount";
import '../../index.css';


export default function Item({ e }) {
    return (
      <div className="p-6 mx-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3xl dark:text-white">{e.title}</h1>
        <img className="p-8 rounded-t-lg" src={e.pictureURL}/>
        <p>{e.description}</p>
        <h2>${e.price}</h2>
        <ItemCount stock={10} initial={1}/>

      </div>
    );
  }
