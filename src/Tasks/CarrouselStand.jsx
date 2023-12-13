import coca from "../assets/productos/coca.jpg";
import primero from "../assets/Carrousel/1.jpeg";
import segundo from "../assets/Carrousel/2.jpg";
import tercero from "../assets/Carrousel/3.jpg";
import cuarto from "../assets/Carrousel/4.jpg";

function CarrouselStand() {
  return (
    <div className="shadow-md m-5 bg-white">
            <h1 className="text-3xl p-5">Cocacola Promociones!</h1> <span className="p-5 bg-slate-100">Mas Información del Producto</span>
            {/* span */}
            <div className="p-5 flex justify-start shadow-sm container">
            <h1 className="p-5">Nuestros Productos </h1>
            <div className="avatar">
              <div className="w-11 mask mask-squircle">
                <img src={coca} className="" />
              </div>
            </div>
        </div>
            <div className="carousel w-full">
              <div id="item1" className="carousel-item w-full">
                  <img src={primero} className="w-full" />
              </div> 
              <div id="item2" className="carousel-item w-full">
                  <img src={segundo} className="w-full" />
              </div> 
              <div id="item3" className="carousel-item w-full">
                  <img src={tercero} className="w-full" />
              </div> 
              <div id="item4" className="carousel-item w-full">
                  <img src={cuarto} className="w-full" />
              </div>
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="badge badge-ghost badge-sm focus:badge-info"></a> 
            <a href="#item2" className="badge badge-ghost badge-sm focus:badge-info"></a> 
            <a href="#item3" className="badge badge-ghost badge-sm focus:badge-info"></a> 
            <a href="#item4" className="badge badge-ghost badge-sm focus:badge-info"></a>
          </div>

            <h1 className="p-5">Obtiene mas Ofertas de 20023</h1>
           {/*  <Bubble/> */}
    </div>
  )
}

export default CarrouselStand
