import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.fake-rest.refine.dev",
    headers: {
        "Content-type": "application/json"
    }
})
export default apiClient