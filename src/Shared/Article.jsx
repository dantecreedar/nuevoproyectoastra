import zanahoria from "../assets/productos/zanaoria.jpg"
import dorito from "../assets/productos/zanaoria.jpg"
import cafe from "../assets/productos/papas.jpg"
import heineke from "../assets/productos/tomate.jpg"
import papas from "../assets/productos/papas.jpg"
import tomate from "../assets/productos/tomate.jpg"
import verduras from "../assets/productos/verdura.jpg"
import granada from "../assets/productos/verdura.jpg"
import radle from "../assets/productos/verdura.jpg"



function Article() {

    let article_img = [
        {
            img_a: zanahoria,
        },
        {
            img_a: dorito,
        },
        {
            img_a: verduras,
        },
        {
            img_a: tomate,
        },
        {
            img_a: papas,
        },
        {
            img_a: cafe,
        },
        {
            img_a: heineke,
        },
        {
            img_a: granada,
        },
        {
            img_a: radle,
        },
    ]

  return (
    <div className="">
        <div className="card border m-3 shadow-lg bg-white text-slate-600">
            <h1 className="p-3 border-b-2 text-black">Articulos de Nuestros Comercios</h1>
            <div className="grid grid-cols-3 place-items-center">
                {
                    article_img.map( e => 

                        <div key={e.id} className="border">
                            <img className="sm:w-32 lg:w-96" src={e.img_a} />
                            <h3 className="pl-2 text-black">$18.068</h3>
                            <p className="pl-2 text-xs">Bebidas, energizantes, productos de calidad</p>
                        </div>

                        )
                }
                <div className="pt-5 pb-5 hover:text-blue-500"> <a href="">Ver mas</a> </div>
            </div>
        </div>
    </div>
  )
}

export default Article
