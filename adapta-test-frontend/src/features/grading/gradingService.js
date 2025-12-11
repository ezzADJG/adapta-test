import axiosClient from '../../config/axiosClient';
const BASE_ROUTE = '/grading';

const getGradingPreview = async (sectionId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/preview/${sectionId}`, config);
    return response.data;
};

const processSectionGrades = async (sectionId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(`${BASE_ROUTE}/process-section/${sectionId}`, {}, config);
    return response.data;
};

const gradingService = { getGradingPreview, processSectionGrades };
export default gradingService;