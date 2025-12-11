import axiosClient from '../../config/axiosClient';

const BASE_SECTIONS = '/sections';
const BASE_SUBMISSIONS = '/submissions';

// Función del estudiante (ya corregida)
const createSubmission = async (sectionId, assignmentId, submissionData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(`${BASE_SECTIONS}/${sectionId}/assignments/${assignmentId}/submit`, submissionData, config);
    return response.data;
};

// OBTENER ENTREGAS: Ahora necesita el ID de la sección y de la tarea
const getSubmissionsForAssignment = async (sectionId, assignmentId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    // Construimos la URL anidada correcta
    const response = await axiosClient.get(`${BASE_SECTIONS}/${sectionId}/assignments/${assignmentId}/submissions`, config);
    return response.data;
};

// 👇 NUEVA FUNCIÓN: Calificar una entrega específica
const gradeSubmission = async (submissionId, gradeData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.put(`${BASE_SUBMISSIONS}/${submissionId}/grade`, gradeData, config);
    return response.data;
};

// Obtener la entrega del estudiante para una tarea
const getMySubmission = async (sectionId, assignmentId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    // Construimos la URL completa y correcta
    const response = await axiosClient.get(`${BASE_SECTIONS}/${sectionId}/assignments/${assignmentId}/mysubmission`, config);
    return response.data;
};

const submissionService = {
    createSubmission,
    getSubmissionsForAssignment,
    gradeSubmission,
    getMySubmission
};

export default submissionService;