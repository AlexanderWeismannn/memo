import axios from "axios"

// in prod we can use local host, otherwise use whatever it is hosted on (dynamic)
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api" 

const api = axios.create({
    baseURL: BASE_URL
});

export default api; 