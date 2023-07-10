import { heroes } from "../data/heroes";


export const getHeroesByName = ( name = '' ) => {
   
    //para limpiar
    name = name.toLocaleLowerCase().trim();
    
    //si no tenemosun nombre en la busqueda
    if ( name.length === 0) return [];

    //para los nombres que si tenemos
   
    return heroes.filter(
        hero => hero.campeon.toLocaleLowerCase().includes( name )
    );



}
