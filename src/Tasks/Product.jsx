import jugo from "../assets/frutas/7.jpg";
import coca from "../assets/frutas/7.jpg";

function Product() {

    let product = [
        {
            txt: "Texto",
            img: jugo
        },
        {
            txt: "Texto",
            img: coca
        },
    ]

  return (
    <div className="flex flex-wrap justify-center bg-white">
        {/* card */}
        {
            product.map(
                e => 
                <div className="sm:card shadow-md m-3 border" key={e.id}>
                    <div className="sm:flex">
                        
                        <div className="p-5">
                        <span className="indicator-item badge badge-primary p-3 text-white">Nuevo!...</span> 
                            <h2 className="card-title p-2">Productor Principal!</h2>
                            <p className="text-3xlz"> Precio Promocion! </p>  
                        </div>

                        <img className="sm:w-32" src={e.img} alt="Album"/>
                    </div>
                </div>
            )
        }
            
    </div>
  )
}

export default Product
