import axios from 'axios';

const url = 'http://localhost:8080'


export const uploadFile = async(data) => {
    try{

        let response = await axios.post(`${url}/upload`, data)
        return response.data

    }
    catch(err){
        console.error("Error while calling the api", err.message);

    }
}