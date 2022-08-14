import Item from "./Item";
import '../../index.css'

export default function ItemList({ zapatos }) {
  return (
    <div className="flex flex-wrap place-content-center mt-2.5 mb-2">
      {zapatos.map((e) => {
        return <Item key={e.id} e={e} />;
      })}
    </div>
  );
}