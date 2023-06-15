import React, { useEffect, useState } from "react";
// import { getRecipes, getDiets, getIpClient} from '../../actions/index.js'
// import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import './LandingPage.css';


export default function LandingPage0(){
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
    // const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        fetch('https://ipinfo.io/json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, [])

    function HandleStart(e) {   // Botón Comenzar
        e.preventDefault();

        //dispatch(getIpClient());    // lanza peticion de IP cliente

        history.push('/home/')

    }

return(
    <div className= "landing">
        <h1 className = 'welcomeMsg'>
            ¿Estás buscando ideas para cocinar?</h1>
        <h1 className = 'welcomeMsg'>¡Este es el lugar indicado! </h1>  
        <div>
            <h1 className = 'welcomeMsg'>Listo!</h1>
            <button className = 'homeButton'
                type = 'button'
                onClick={(e) => HandleStart(e)}>¡Comencemos!
            </button>
        </div>                                                                                     
    </div>
)
}
