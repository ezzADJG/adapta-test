// src/features/auth/authService.js
import axiosClient from '../../config/axiosClient';

const BASE_ROUTE = '/users';

// NUEVA FUNCIÓN: Obtener la lista de instituciones para el selector
const getInstitutions = async () => {
    const response = await axiosClient.get(`/api/institutions`);
    return response.data;
};

// MODIFICAR LOGIN: Ahora debe enviar el institutionId
const login = async (userData) => {
    // userData ahora será { email, password, institutionId }
    const response = await axiosClient.post(`${BASE_ROUTE}/login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// Registrar un usuario (se mantiene similar, pero lo usaremos más adelante)
const register = async (userData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(BASE_ROUTE, userData, config);
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    getInstitutions, // <-- Exportar nueva función
    register,
    login,
    logout,
};

export default authService;