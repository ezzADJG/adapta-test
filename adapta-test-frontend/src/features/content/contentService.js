import axiosClient from "../../config/axiosClient";

const BASE_COURSES = "/courses";
const BASE_SECTIONS = "/sections";
const BASE_MODULES = "/modules";

// Obtener los módulos publicados en una SECCIÓN
const getModulesForSection = async (sectionId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.get(
    `${BASE_SECTIONS}/${sectionId}/modules`,
    config
  );
  return response.data;
};

// Crear un módulo en la biblioteca del profesor
const createModuleInLibrary = async (moduleData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.post(BASE_MODULES, moduleData, config);
  return response.data;
};

// Publicar un módulo en una SECCIÓN
const publishModuleToSection = async (sectionId, moduleId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.post(
    `${BASE_SECTIONS}/${sectionId}/modules`,
    { moduleId },
    config
  );
  return response.data;
};

// Obtener los detalles de un curso específico
const getCourseDetails = async (courseId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  // Usamos la URL base de cursos, no la de módulos
  const response = await axiosClient.get(`${BASE_COURSES}/${courseId}`, config);
  return response.data;
};

const createLessonInModule = async (moduleId, lessonData, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.post(
    `${BASE_MODULES}/${moduleId}/lessons`,
    lessonData,
    config
  );
  return response.data;
};

const getLessonsForModule = async (moduleId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.get(
    `${BASE_MODULES}/${moduleId}/lessons`,
    config
  );
  return response.data;
};

const markLessonAsComplete = async (moduleId, lessonId, sectionId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosClient.post(
    `${BASE_MODULES}/${moduleId}/lessons/${lessonId}/complete`,
    { sectionId },
    config
  );
  return response.data;
};

const getCompletedLessons = async (sectionId, token) => {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  // Esta ruta la habíamos definido anidada en secciones, así que es diferente
  const response = await axiosClient.get(
    `${BASE_SECTIONS}/${sectionId}/completed-lessons`,
    config
  );
  return response.data;
};

const contentService = {
  getModulesForSection,
  createModuleInLibrary,
  publishModuleToSection,
  getCourseDetails,
  getLessonsForModule,
  createLessonInModule,
  markLessonAsComplete,
  getCompletedLessons,
};

export default contentService;

