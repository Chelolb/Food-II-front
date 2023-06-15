import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


export function getRecipes() {
    return async function(dispatch) {
        try{
            var json = await axios.get(BACKEND_URL + '/recipes/name/'); // obtiene recetas en general
        
            return dispatch({
                type: 'GET_RECIPES', 
             payload: json.data
            })   
        }
        catch (error){
            console.log(error)
        }   
    }
}

export function getRecipeByName(name){   // obtiene recetas por nombre
    return async function(dispatch){
        try{
            var json = await axios.get(BACKEND_URL + '/recipes/name?name=' + name);

            return dispatch ({
                type: 'GET_RECIPE_BY_NAME',
                payload: json.data
            })
        }
        catch (error){
            console.log(error)
        }
    }
}

export function getDiets() {        ; // obtiene dietas 
    return async function(dispatch) {
        console.log(BACKEND_URL)
        try{
            var info = await axios.get(BACKEND_URL + '/diets', {})   

            return dispatch({
                type: 'GET_DIETS', 
                payload: info.data
            });            
        }   
        catch (error){
            console.log(error)
        } 
    }

}

export function cleanDetail(){
    return{
        type: 'CLEAN_DETAIL',
        //payload
    }
}

export function postRecipe(payload){            // guarda receta en bd
    return async function(dispatch) {
        try{
            var response = await axios.post(BACKEND_URL + '/recipe', payload);  
            console.log(response)
            return response; 
        }
        catch (error){
            console.log(error)
        } 
    }
}

export function filterRecipeByDiets(payload){
    return{
        type: 'FILTER_BY_DIET',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function orderByScore(payload){
    return{
        type: 'ORDER_BY_SCORE',
        payload
    }
}

export function getRecipeDetail(id){    // obtiene detalles
    return async function(dispatch){
        try{
            var json = await axios.get(BACKEND_URL + '/recipes/detail/' + id);

            return dispatch ({
                type: 'GET_RECIPE_DETAIL',
                payload: json.data
            })
        }
        catch (error){
            console.log(error)
        }
    }
}

export function getIpClient(){      // obtiene IP clientes
    return async function(dispatch){
        try {
            var response = await axios.get(BACKEND_URL + '/ip', {});

            return dispatch({
                type: 'GET_IP', 
                payload: response.data
            });  

        } catch (error) {
            console.error(error);
        }
    }
}

export function sendDataUser(payload){            // guarda user data en bd
    return async function(dispatch) {
        try{
            var response = await axios.post(BACKEND_URL + '/user', payload);  
            console.log(response)
            return response; 
        }
        catch (error){
            console.log(error)
        } 
    }
}