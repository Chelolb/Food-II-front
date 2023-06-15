import axios from 'axios';

export const getIpUser = async ()=>{

    // let newGuest;
    
    const getIpInfo = 'https://ipinfo.io/json'
   
    try{
        const response = await axios.request(getIpInfo);
        // return the whole response object instead of only the data.
        // this helps in error handling in the component
        let datas = response;

        // if(Object.keys(data)) { // si hay datos del cliente...
                
        //     let dia, mes, horas, minuto;

        //     let now = new Date();

        //     if(now.getDate() < 10) {dia = `0${now.getDate().toString()}`}else{dia = `${now.getDate()}`}
        //     if(now.getMonth() < 9) {mes = `0${(now.getMonth() + 1).toString()}`}else{mes = `${now.getMonth() + 1}`}
        //     if(now.getHours() < 10) {horas = `0${now.getHours().toString()}`}else{horas = `${now.getHours()}`}
        //     if(now.getMinutes() < 10) {minuto = `0${now.getMinutes().toString()}`}else{minuto = `${now.getMinutes()}`}

        //     let fecha = `${dia}-${mes}-${now.getFullYear()}`
        //     let hora = `${horas}:${minuto}`
        //     let ip =  data.ip
        //     let hostname = data.hostname
        //     let ciudad = data.city
        //     let region = data.region
        //     let pais = data.country
        //     let localizacion = data.loc
        //     let empresa = data.org
        //     let cpostal = data.postal
        //     let zonaHoraria = data.timezone   
            
        //     newGuest = {
        //         fecha,
        //         hora,
        //         ip,
        //         hostname,
        //         ciudad,
        //         region,
        //         pais,
        //         localizacion,
        //         empresa,
        //         cpostal,
        //         zonaHoraria,
        //     }

        // }
        // else{
        //     console.log("Error read Guest's Ip ");
        // }

        // return newGuest;
        return datas;
    }
    catch(error){}
}    