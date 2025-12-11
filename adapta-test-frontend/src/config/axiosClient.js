import axios from 'axios';

// Crea una instancia personalizada
const axiosClient = axios.create({
    // En Vite usamos import.meta.env para las variables de entorno
    // Si no existe la variable (desarrollo), usa localhost
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;