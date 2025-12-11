import axiosClient from '../../config/axiosClient';

// La URL base apunta a las secciones, ya que las tareas están anidadas
const BASE_ROUTE = '/sections';

// Crear una nueva tarea para una sección
const createAssignment = async (sectionId, assignmentData, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.post(`${BASE_ROUTE}/${sectionId}/assignments`, assignmentData, config);
    return response.data;
};

// Obtener todas las tareas de una sección
const getAssignmentsForSection = async (sectionId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.get(`${BASE_ROUTE}/${sectionId}/assignments`, config);
    return response.data;
};

const assignmentService = {
    createAssignment,
    getAssignmentsForSection,
};

export default assignmentService;