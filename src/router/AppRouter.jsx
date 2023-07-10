//dependencias react-router.
import {  Route, Routes } from "react-router-dom";
// rutas del components moduloHero.
import { HeroesRoutes } from "../moduloHero";
//components de moduloAuth en las peges.
import { LoginPage } from "../moduloAuth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";



//componente rutas:
export const AppRouter = () => {

  return (
    <>
     

    <Routes>
  
        <Route path="/login" element={ 
          <PublicRouter>
            <LoginPage/>
        </PublicRouter>
         } />
         
        <Route path="/*" element={
            <PrivateRouter>
              <HeroesRoutes/>
            </PrivateRouter>
        } />

        {/* <Route path="/*" element={ <HeroesRoutes/> } /> */} {/* cualquier ruta que no sea el login pasa a esta */}
       
    </Routes>
    
    </>
  )
}
