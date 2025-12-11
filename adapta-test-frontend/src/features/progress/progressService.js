
import axiosClient from '../../config/axiosClient';

const BASE_ROUTE = '/progress';

const getMyProgress = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(`${BASE_ROUTE}/my-progress`, config);
    return response.data;
};

const enrollInCareer = async (careerId, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post('/academic-records/enroll', { careerId }, config);
    return response.data;
}

const progressService = { getMyProgress, enrollInCareer };
export default progressService;