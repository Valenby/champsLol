import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../moduloAuth/context/AuthContext";


export const Navbar = () => {

    //login con nombre de usuario
    const {user, logout} = useContext(AuthContext)
   

    // costomHook para navegar por las rutas
    const navigate = useNavigate();

    const cerrarSeccion =()=>{
        logout();
        navigate('/login', {
            replace: true /*  replace evita regresar al historial en rutas */
        });
    }



  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                 ★ lEAGUE OF LEGENDS
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active': ''} `}
                        to="/lol"
                    >
                        ADC
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active': ''} `}
                        to="/dc"
                    >
                        Magos
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active': ''} `}
                        to="/tanques"
                    >
                        Tanques
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${isActive? 'active': ''} `}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span style={{ color: '#F97AB1'}} className="nav-item nav-link">
                        {user?.name}
                    </span>

                    <button className="nav-item nav-link btn"
                    onClick={cerrarSeccion}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
  )
}
