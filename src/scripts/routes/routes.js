import Restaurants from '../views/pages/restaurans';
import DetailResto from '../views/pages/detail-resto';
import Like from '../views/pages/likeResto';

// create routes for restaurant page
const routes = {
  '/': Restaurants,
  '/detail/:id': DetailResto,
  '/favorite': Like,
};

export default routes;
