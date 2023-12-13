import { Outlet,Link } from 'react-router-dom'
import EnterDash from '../Components/EnterpriseDash/EnterDash'
import { IoIosHome } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { SiAzuredataexplorer } from "react-icons/si";
import { RiNotificationBadgeFill } from "react-icons/ri";
import { BsCloudFog2Fill } from "react-icons/bs";
import LayoutFooter from '../Utils/LayoutFooter';




function Layouts() {

  return (
    <div>
        
        <div className='grid grid-cols-5 h-screen'>
          {/* panel windows */}
            <div className='h-full md:block hidden bg-black'>
              <div className='fixed'>
                  <h1 className='text-2xl p-5 font-serif'>ASTRA</h1>
                  <ul>
                      <li className='p-5 hover:text-white'><Link to="/" className='flex'><IoIosHome className='text-2xl mr-3'/><span className='text-xl'>Inicio</span></Link></li>
                      <li className='p-5 hover:text-white'><Link to="/explorar" className='flex'><SiAzuredataexplorer className='text-2xl me-3'/><span className='text-xl'>Explorar</span></Link></li>
                      <li className='p-5 hover:text-white'><Link to="/notificacion" className='flex'><RiNotificationBadgeFill className='text-2xl me-3'/><span className='text-xl'>Notificaciónes</span></Link></li>
                      <li className='p-5 hover:text-white'><Link to="/servicios" className='flex'><BsCloudFog2Fill className='text-2xl me-3'/><span className='text-xl'>Servicios</span></Link></li>
                      <li className='p-5 hover:text-white'><Link to="/login" className='flex'><RiLoginCircleFill className='text-2xl me-3'/><span className='text-xl'>Mi Cuenta</span></Link></li>
                  </ul>
              </div>
            </div>
            {/* segundo panel Windows */}
            <div className='bg-white sm:col-span-3 col-span-full w-full'>
                <div className='p-5 text-3xl text-slate-600'>Bienvenidos! <span className='text-xl'>Esto es Astra Proyect 0.2</span></div>
                <Outlet/>
            </div>
            {/* panel media query */}
            <div className='w-full fixed bottom-0 sm:hidden bg-black p-3'>
              <EnterDash/>
            </div>
            {/* panel tercero windows */}
            <div className='p-5 bg-white sm:block hidden border-l-2 text-slate-500'>
              <div className='fixed h-full w-full bg-white'>

              <div className="collapse bg-base-200">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-slate-500 text-white peer-checked:bg-slate-300  peer-checked:text-secondary-content">
                <div className='text-2xl'>Panel Empresa</div>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-neutral-900 peer-checked:text-white"> 

                      <ul className='p-5'>
                        <li><a><Link className='p-3 hover:text-blue-600' to="/empresa">Empresa</Link></a></li>
                        <li><a><Link className='p-3 hover:text-blue-600' to="/envios">Envios</Link></a></li>
                        <li><a><Link className='p-3 hover:text-blue-600' to="/compra">Compra Online</Link></a></li>
                        <li><a><Link className='p-3 hover:text-blue-600' to="/soporte">Atencion Al Cliente</Link></a></li>
                        <li><a><Link className='p-3 hover:text-blue-600' to="/credito">Genera Credito</Link></a></li>
                      </ul>

                  </div>
                  
                </div>
                {/* footer */}
                <LayoutFooter/>

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Layouts
