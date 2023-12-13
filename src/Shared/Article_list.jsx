import papas from "../assets/frutas/1.jpg";
import brocoli from "../assets/frutas/2.jpg";
import tomate from "../assets/frutas/3.jpg";
import verduras from "../assets/frutas/4.jpg";

function Article_list() {

    let jugo_v = [
        {
            img_jugo: papas
        },
        {
            img_jugo: brocoli
        },
        {
            img_jugo: tomate
        },
        {
            img_jugo: verduras
        },
    ]

  return (
    <div>
        <div>
            {
                <div className="card border m-3 shadow-lg bg-white text-slate-600">
                    <h1 className="p-3 border-b-2 text-black">Relacionados con tus Gustoss</h1>
                    <div className="grid grid-cols-1">
                        {
                            jugo_v.map( e => 
                                
                                <div className="border flex" key={e.id}>
                                    <img className="w-24 lg:w-36" src={e.img_jugo} alt="" />

                                    <div className="p-3 m-2">
                                        <p>Colección de productos alimenticios y citricos, marcas Cocacola, Levite, entre Otras</p>
                                        <h1 className="text-xl">$ 1.187.245</h1>
                                        <span className="text-green-500">Envio Gratis</span>
                                    </div>

                                </div>
                                
                                )
                        }
                     <div className="pt-5"> <a href=""></a> </div>
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default Article_list
