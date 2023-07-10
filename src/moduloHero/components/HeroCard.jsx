import { Link } from "react-router-dom"


export const HeroCard = ({
        id,
        campeon, 
        first_appearance,
}) => {

    const heroImagerUrl = `/assets/heroes/${ id }.jpg`


  return (
   <div className="col-12">
      <div className="card">
          <div className="row no-gutters">

              <div className="col-4 animate__animated animate__fadeIn">
                 <img  src={heroImagerUrl} className="img-fluid" alt={ campeon }/>
              </div>

                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title"> {campeon} </h5>
                        <p className="card-text">
                            <small className="text-muted"> {first_appearance} </small>
                        </p>

                       
                        <Link style={{textDecoration: 'none', color: '#F97AB1'}} className="card-title " to={`/hero/${ id }`} >
                        Más...
                        </Link>
                       
                        
                    </div>
                </div>
          </div>
      </div>
   </div>
  )

}
