import axios from "axios";

// retorna uma instancia do axios
const api = axios.create({
baseURL: 'http://localhost:3000'

})

export default api;