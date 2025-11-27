import axios from "axios";
import {API_URL} from "@/shared/config/api.config.ts";

export const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});