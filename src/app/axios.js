import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true,
});