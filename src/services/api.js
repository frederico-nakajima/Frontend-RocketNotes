import axios from "axios";


export const api = axios.create({
    baseURL:"https://backend-rocketnotes-cdl1.onrender.com"
})