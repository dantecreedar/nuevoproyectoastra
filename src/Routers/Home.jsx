
import CarrouselStand from "../Tasks/CarrouselStand"
import Product from "../Tasks/Product"
import coca from "../assets/coca.jpg"

import Start from "../Tasks/Start"
import { DiGitMerge } from "react-icons/di";
import Article from "../Shared/Article"
import Article_mini from "../Shared/Article_mini"
import Article_list from "../Shared/Article_list"


function Panelchat(){
  return (
    <div className="shadow-md p-5 border-t-2 bg-white text-slate-600">
          
            <div className="text-5xl flex">AtraBot<DiGitMerge /></div>
            <span className="text-2xl">Disponible para Mobile/Modo Resposive On</span>
            <Start/>
            <span className="pl-5">Danos una Puntuacion del Servicio</span>
    </div>
  )
}

function Home() {
  return (
    <div className="bg-gray-100 pb-3">
        
    <Panelchat/>
    <Article/>
    <Article_list/>
        <div className="p-5 flex justify-center shadow-sm container bg-white">
            <h1 className="text-4xl p-5">Nuestros Productos </h1>
            <div className="avatar">
              <div className="w-16 mask mask-squircle">
                <img src={coca} className="" />
              </div>
            </div>
        </div>
    
        {/* productos */}
        <Product/>
        <Article_mini/>
        <CarrouselStand/>
        <Article/>

    </div>
  )
}

export default Home
