import axiosClient from '../../config/axiosClient';
const BASE_ROUTE = '/academic-cycles';

const getCycles = async (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.get(BASE_ROUTE, config);
    return response.data;
};

const createCycle = async (cycleData, token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const response = await axiosClient.post(BASE_ROUTE, cycleData, config);
    return response.data;
};

const academicCycleService = { getCycles, createCycle };
export default academicCycleService;