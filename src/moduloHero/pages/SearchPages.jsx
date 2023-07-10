import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hook/useForm";
import { HeroCard } from "../components";
import { getHeroesByName } from "../helpers";


export const SearchPages = () => {

  const navigate = useNavigate(); 
  const location = useLocation();

  const { q ='' } = queryString.parse( location.search);
  const heroes1 = getHeroesByName(q);
  // hook useForm
  const {searchText, onInputChange} = useForm({
    searchText: q,
  });

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes1.length === 0;
  

  //from onSubmit
  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
     
    navigate(`?q=${searchText }`);
  }

  return (
    <>
      <br/>
      <h1>Search</h1> 
      <hr />

    <div className="row animate__animated animate__pulse">
      <div className="col-5">
          <h2>Ingresa Campeon</h2>
          <h6>solo existentes en en esta pagina</h6>
          <hr />
            <form onSubmit={onSearchSubmit}>
              <input 
                type="text"
                placeholder="Ingresa Personaje"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn button mt-3">
                Search
              </button>
            </form>
      </div>

     <br /> 
     <br />

      <div className="col-7">
        <h4>Resultado 7u7</h4>
        <hr />

        {/* {
          ( q === '')
          ?<div className="alert alert-primary">Busca un campeon</div>
          : (heroes1.length === 0) && <div className="alert alert-danger">No se encontraron resultados <b> {q} </b></div>
        } */}

      <div className="alert alert-primary " 
        style={{ display: showSearch ? '' : 'none' }}>
        Busca un campeon
      </div>

      <div className="alert alert-danger " 
        style={{ display: showError ? '' : 'none' }}>
        No se encontraron resultados<b>{q}</b>
      </div>


        {
          heroes1.map( hero => (
            <HeroCard key={ hero.id } {...hero } />
          ))
        }
     

      </div>
  </div>

    
    </>
  )
}
