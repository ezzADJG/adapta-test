import axiosClient from '../../config/axiosClient';

// Obtener los detalles de una sección específica
const getSectionDetails = async (sectionId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`/sections/${sectionId}`, config);
    return response.data;
};

const learningService = {
    getSectionDetails,
};

export default learningService;