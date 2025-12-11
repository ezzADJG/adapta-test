import axiosClient from '../../config/axiosClient';
const BASE_ROUTE = '/enrollments';

const getMyEnrollments = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/my-enrollments`, config);
    return response.data;
};

// Matricularse en una sección
const enrollStudent = async (sectionId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(`${BASE_ROUTE}/enroll`, { sectionId }, config);
    return response.data;
};

const enrollmentService = { getMyEnrollments, enrollStudent };
export default enrollmentService;