import { Navigate, Route, Routes } from "react-router-dom"

import { DcMago, HeroPege, SearchPages, TanquePage, TiradoresPage } from "../pages"
//components de modulo iu-interfazGrafica en las peges.
import { Navbar } from "../../iu-interfazGrafica/components/Navbar"



//componente  rutas 
export const HeroesRoutes = () => {
  return (
   <>
   
   <Navbar/>

    <div className="container">
        <Routes>
             <Route path="lol" element={ <TiradoresPage/> } />
                <Route path="dc" element={ <DcMago/> } />
                <Route path="tanques" element={ <TanquePage/> } />


                <Route path="search" element={ <SearchPages/> } />
                <Route path="hero/:id" element={ <HeroPege/> } />

               
                {/* path donde queremos que se renderice nuestra primer vista */}
            <Route path="/" element={ <Navigate to="/lol" /> } />
        </Routes>
    </div>
   
   </>
  )
}
