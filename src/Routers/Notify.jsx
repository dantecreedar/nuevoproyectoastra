import Aricle_list from "../Shared/Article_list"
import Article_complete from "./Article_complete"
import { MdTrolley } from "react-icons/md";

function Notify() {
  return (
    <div className="bg-gray-100 text-slate-500">
        <div className="p-5 shadow-md border bg-white">
              <div className="text-5xl">Lo Nuevo</div>
              <h3 className="text-2xl">Articulos Nuevos relacionados y en Stock</h3>
        </div>
        <div className="text-center text-2xl p-2 bg-white flex justify-center">Canasta Actualizada de la Semana<MdTrolley className="text-3xl"/></div>
        <span className="pl-5 card m-3 text-2xl bg-white p-2 shadow-md">En stock: 12/11/2023</span>
        <Aricle_list/>
        <Article_complete/>
    </div>
  )
}

export default Notify
