import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layouts from './Admin/Layouts'
import Home from './Routers/Home'
import Explorer from './Routers/Explorer'
import Notify from './Routers/Notify'
import Login from './Services/Login'
import Yaguar from './Page/Yaguar'
import Makro from './Page/Makro'
import Vital from './Page/Vital'
import LoadingScreen from './Page/LoadingScreen'
import { useState } from 'react'
import Services from './Routers/Services'
import Shipments from './Services/shipments'
import Shopping from './Services/Shopping'
import CustomerSupport from './Services/CustomerSupport'
import PointCredit from './Services/PointCredit'
import EnEspera from './Page/EnEspera'




function App() {

  let [loading, setLoading] = useState(true)
  return (
    <>
      <div className='App dark:bg-neutral-900'>
              {loading ? (
          <LoadingScreen setLoading={setLoading} />
        ) : (
            <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layouts/>}>
                  <Route index element={<Home/>} />
                  <Route path='servicios' element={<Services/>} />
                  <Route path='explorar' element={<Explorer/>} />
                  <Route path='notificacion' element={<Notify/>} />
                  <Route path='login' element={<Login/>} />
                  <Route path='envios' element={<Shipments/>} />
                  <Route path='compra' element={<Shopping/>} />
                  <Route path='credito' element={<PointCredit/>} />
                  <Route path='soporte' element={<CustomerSupport/>} />
                  {/* en espera */}
                  <Route path='empresa' element={<EnEspera/>} />
                  {/* empresas */}
                  <Route path='yaguar' element={<Yaguar/>} />
                  <Route path='makro' element={<Makro/>} />
                  <Route path='vital' element={<Vital/>} />
              </Route>
            </Routes>
        </BrowserRouter>
        )}
      </div>
    </>
  )
}

export default App

