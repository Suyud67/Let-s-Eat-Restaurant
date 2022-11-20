import ApiRoutes from '../config/api-config';
import makeLoader from '../utils/loader';

// fetch restaurant API
const listRestaurant = async () => {
  makeLoader();
  const response = await fetch(ApiRoutes.List_Restaurant);
  const data = await response.json();
  return data.restaurants;
};

const detailRestaurant = async (id) => {
  makeLoader();
  const response = await fetch(ApiRoutes.Detail(id));
  const dataJson = await response.json();
  return dataJson.restaurant;
};

const postNewReview = async (id, name, review) => {
  const data = {
    id,
    name,
    review,
  };

  const postReq = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(ApiRoutes.Form_Review, postReq);
  const dataJson = response.json();
  return dataJson;
};

export { listRestaurant, detailRestaurant, postNewReview };
