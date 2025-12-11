import axiosClient from '../../config/axiosClient';
const BASE_ROUTE = '/analytics';

// Obtener las analíticas para una sección específica
const getSectionAnalytics = async (sectionId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/section/${sectionId}`, config);
    return response.data;
};

const analyticsService = {
    getSectionAnalytics,
};

export default analyticsService;