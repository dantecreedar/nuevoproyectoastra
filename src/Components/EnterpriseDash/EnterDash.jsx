import { Link } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { SiAzuredataexplorer } from "react-icons/si";
import { RiLogoutBoxFill, RiNotificationBadgeFill} from "react-icons/ri";
import { BsCloudFog2Fill } from "react-icons/bs";

import Info from "../../Tasks/Info"
import Chat from '../../Chat/Chat';
import Chatbot from '../../Chat/Chatbot';
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";



function EnterDash() {




  return (
    <div>
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="text-2xl flex pb-2"><MdSpaceDashboard className='text-3xl hover:text-white ml-5'/>
                    <div className=' pl-10 text-center hover:text-white text-3xl'><Link to="/"><IoIosHome/></Link></div>
                    <div className=' pl-10 text-center hover:text-white text-3xl'><Link to="/explorar"><SiAzuredataexplorer /></Link></div>
                    <div className=' pl-10 text-center hover:text-white text-3xl'><Link to="/notificacion"><RiNotificationBadgeFill /></Link></div>
                    <div className=' pl-10 text-center hover:text-white text-3xl'><Link to="/servicios"><BsCloudFog2Fill/></Link></div>
                </label>
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content bg-black">
                    {/* Sidebar content here */}
                    
                    <li><a><Link className='flex hover:text-white' to="/login"><RiLogoutBoxFill className='text-2xl'/><span className='text-xl'>Mi Cuenta</span></Link></a></li>
                    <div className=''></div>
                    
                    {/* panel desplegable */}
                    <div className="collapse bg-base-200">
                        <input type="checkbox" className="peer" /> 
                        <div className="collapse-title bg-black text-white peer-checked:bg-neutral-700 peer-checked:text-neutral-400">
                            <div className='text-2xl pt-2'>Panel Empresa</div>
                        </div>
                        <div className="collapse-content bg-primary text-primary peer-checked:bg-white peer-checked:text-secondary-content"> 
                        {/* lista */}
                            <ul className='pt-2'>
                                <li><a><Link className='p-3 hover:text-blue-600' to="/empresa">Empresa</Link></a></li>
                                <li><a><Link className='p-3 hover:text-blue-600' to="/envios">Envios</Link></a></li>
                                <li><a><Link className='p-3 hover:text-blue-600' to="/compra">Compra Online</Link></a></li>
                                <li><a><Link className='p-3 hover:text-blue-600' to="/soporte">Atencion Al Cliente</Link></a></li>
                                <li><a><Link className='p-3 hover:text-blue-600' to="/credito">Genera Credito</Link></a></li>
                            </ul>
                        </div>
                    </div>

                    <li className='disabled'><a><Link className='p-2 transition-all hover:text-white hover:text-2xl flex'><span className='pr-3'>Descarga La App</span> <FaGooglePlay className='text-3xl'/> </Link></a></li>
                    <div className=''>
                        {/* <Chat/> */}
                        <Chatbot/>
                       {/*  <Chatbot/> */}
                        <Info/>
                    </div>
                    
                </ul>
                
            </div>
            
        </div>
    </div>
  )
}

export default EnterDash
