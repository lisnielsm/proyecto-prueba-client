import axios from 'axios';

const ClienteAxios = axios.create({
    baseURL: 'https://tasks-list-server.herokuapp.com/api'
});
 
export default ClienteAxios;