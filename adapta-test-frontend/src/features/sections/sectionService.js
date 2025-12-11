import axiosClient from '../../config/axiosClient';

const BASE_COURSES = '/courses';
const BASE_SECTIONS = '/sections';

// Obtener las secciones de un curso específico
const getSectionsForCourse = async (courseId, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.get(`${BASE_COURSES}/${courseId}/sections`, config);
    return response.data;
};

const getMySections = async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axiosClient.get(`${BASE_SECTIONS}/my-sections`, config);
    return response.data;
};

const updateApprovalCriteria = async (sectionId, criteriaData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.put(`${BASE_SECTIONS}/${sectionId}/criteria`, criteriaData, config);
    return response.data;
};

const sectionService = { getSectionsForCourse, getMySections, updateApprovalCriteria };
export default sectionService;