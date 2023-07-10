import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../moduloAuth";


export const PublicRouter = ({ children }) => {

    const {logged} = useContext( AuthContext);
    //si no esta autenticado!!!!!!
  return (!logged)
  ? children
  : <Navigate to="/lol"/>
}
