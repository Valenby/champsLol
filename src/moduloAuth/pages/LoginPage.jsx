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
    <div className="container mt-5 d-flex flex-column align-items-center">
      <h1>Login uwu</h1>
      <br />
      <button style={{background: '#F97AB1', color: 'white'}} className="btn"
      onClick={ iniciarSeccion }
      >
        Login
      </button>
    </div>
  )
}
