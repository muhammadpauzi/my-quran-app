import axios from "axios";

export default axios.create({
    baseURL: 'http://api.alquran.cloud/v1/',
    'Access-Control-Allow-Origin': '*'
});