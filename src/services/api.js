import axios from "axios";


export const api = axios.create({
    baseURL:"https://backend-rocketnotes-t9mj.onrender.com"
})