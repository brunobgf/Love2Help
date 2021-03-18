//this method creates connection between front end and back-end
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/'
});

export default api;