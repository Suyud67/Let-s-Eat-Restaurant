import CONFIG from './config';

const ApiRoutes = {
  List_Restaurant: `${CONFIG.BASE_URL}/list`,
  Detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  Form_Review: `${CONFIG.BASE_URL}/review`,
};

export default ApiRoutes;
