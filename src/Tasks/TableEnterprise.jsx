
import person from "../assets/productos/coca.jpg"

function TableEnterprise() {

    let product = [
        {
            articulo: "coca cola",
            empresa: "Yaguar",
            stock: "300 unidades",
            estado: "Discponible",
            precio: "Estandar",
            img: person
        },
        {
            articulo: "coca cola",
            empresa: "Yaguar",
            stock: "300 unidades",
            estado: "Discponible",
            precio: "Estandar",
            img: person
        },
        {
            articulo: "coca cola",
            empresa: "Yaguar",
            stock: "300 unidades",
            estado: "Discponible",
            precio: "Estandar",
            img: person
        },
        {
            articulo: "coca cola",
            empresa: "Yaguar",
            stock: "300 unidades",
            estado: "Discponible",
            precio: "Estandar",
            img: person
        },
    ]

  return (
    <div>
            <div className="overflow-x-auto bg-green-400 text-white">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="text-black text-center text-xl">
                        <th> Articulo </th>
                        <th> Stock </th>
                        <th> Precio </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        product.map( e =>
                            
                            <tr key={e.id}>
                                <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={e.img} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                    </div>
                                    <div>
                                    <div className="font-bold"> {e.articulo} </div>
                                    <div className="text-sm opacity-50"> {e.empresa} </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                    {e.stock}    <br />
                                    {e.estado}
                                <br/>
                                </td>
                                <td> {e.estado} </td>
                            </tr>
                            
                            )
                    }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default TableEnterprise
