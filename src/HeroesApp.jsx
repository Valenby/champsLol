//Renderizamos todo lo que hagamos en el Router...
import { AuthProvaider } from "./moduloAuth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    <AuthProvaider>
    
    <AppRouter/>

    </AuthProvaider>
  )
}
