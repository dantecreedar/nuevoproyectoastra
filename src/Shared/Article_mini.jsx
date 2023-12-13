import granada from "../assets/productos/tomate.jpg"
import doritos from "../assets/productos/verdura.jpg"


function Article_mini() {

    let article_img = [
        {
            img_a: granada,
        },
        {
            img_a: doritos,
        },
    ]

  return (
    <div>
            <div className="card border m-3 shadow-lg bg-white text-slate-600">
            <h1 className="p-3 border-b-2 text-black">Articulos de Nuestros Comercios</h1>
            <div className="grid grid-cols-2 place-items-center">
                {
                    article_img.map( e => 

                        <div key={e.id} className="border">
                            <img className="sm:w-32 lg:w-96" src={e.img_a} />
                            <h3 className="pl-2 mt-5 text-black">$18.068</h3>
                            <p className="pl-2 text-xs">Bebidas, energizante producto de calidad</p>
                        </div>

                        )
                }
                <div className="pt-5"> <a href="">Ver mas</a> </div>
            </div>
        </div>
    </div>
  )
}

export default Article_mini
