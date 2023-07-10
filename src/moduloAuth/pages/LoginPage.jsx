import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const {login} = useContext(AuthContext)
  const navigate = useNavigate();

  const iniciarSeccion = ()=>{
    const lasPath = localStorage.getItem('lastPath') || '/';
    login('Valenby');

    navigate( lasPath, {
      replace: true 
    });

  }

  return (
    <div className="container mt-5">
      <h1>Login uwu</h1>
      <hr />

      <button className="btn btn-primary"
      onClick={ iniciarSeccion }
      >
        Login
      </button>
    </div>
  )
}
