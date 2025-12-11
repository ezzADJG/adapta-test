import axiosClient from '../../config/axiosClient';
const BASE_ROUTE = '/modules';

// Obtener las preguntas de un módulo
const getQuestionsForModule = async (moduleId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/${moduleId}/questions`, config);
    return response.data;
};

// Crear una nueva pregunta en un módulo
const createQuestion = async (moduleId, questionData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(`${BASE_ROUTE}/${moduleId}/questions`, questionData, config);
    return response.data;
};

const questionService = {
    getQuestionsForModule,
    createQuestion,
};

export default questionService;