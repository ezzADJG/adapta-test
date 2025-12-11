import axiosClient from '../../config/axiosClient';

const BASE_ROUTE = '/institutions';

// Obtener todas las instituciones
const getInstitutions = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axiosClient.get(BASE_ROUTE, config);
  return response.data;
};

// Crear una nueva institución
const createInstitution = async (institutionData, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axiosClient.post(BASE_ROUTE, institutionData, config);
  return response.data;
};

const institutionService = {
  getInstitutions,
  createInstitution,
};

export default institutionService;