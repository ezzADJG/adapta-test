import axiosClient from '../../config/axiosClient';

const BASE_ROUTE = '/careers';

// Obtener todas las carreras
const getCareers = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.get(BASE_ROUTE, config);
    return response.data;
};

// Crear una nueva carrera
const createCareer = async (careerData, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.post(BASE_ROUTE, careerData, config);
    return response.data;
};

// Asignar un coordinador a una carrera
const assignCoordinator = async (careerId, userId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.put(`${BASE_ROUTE}/${careerId}/coordinator`, { userId }, config);
    return response.data;
};

const getMyCareer = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/my-career`, config);
    return response.data;
};

// Añadir un curso a la malla curricular
const addCourseToCurriculum = async (careerId, courseData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(`${BASE_ROUTE}/${careerId}/curriculum`, courseData, config);
    return response.data;
};

const getCareerById = async (careerId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/${careerId}`, config);
    return response.data;
};

const careerService = {
    getCareers,
    createCareer,
    assignCoordinator,
    addCourseToCurriculum,
    getMyCareer,
    getCareerById
};

export default careerService;