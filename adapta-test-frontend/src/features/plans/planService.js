import axiosClient from '../../config/axiosClient';
const BASE_ROUTE = '/plans';

const getPlans = async (token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.get(BASE_ROUTE, config);
  return response.data;
};

const createPlan = async (planData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.post(BASE_ROUTE, planData, config);
  return response.data;
};

const planService = { getPlans, createPlan };
export default planService;