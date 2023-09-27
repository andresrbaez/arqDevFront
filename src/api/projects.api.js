import axios from 'axios'

// const URL = process.env.NODE_ENV === "production" 
// ? import.meta.env.VITE_BACKEND_URL 
// : "http://localhost:4000";
let URL = "https://jfbmapi.onrender.com"

const projectsApi = axios.create({
    baseURL: `${URL}/api/projects/`
});

export const getAllProjects = () => projectsApi.get("/")

export const getProject = (id) => projectsApi.get(`/${id}`)
