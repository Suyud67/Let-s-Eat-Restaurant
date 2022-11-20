import { listRestaurant } from '../../data/list-restaurant';
import { restaurantUI } from '../template/content-templates';

// render content restaurants
const Restaurants = {
  async render() {
    return `
    <div class="header-restaurant">
      <h2>Restaurants</h2>
    </div>
    <section class="cards-restaurant"></section>
    `;
  },

  async afterRender() {
    // fetch restaurants
    const restaurants = await listRestaurant();

    // get container restaurant
    const cardsContainer = document.querySelector('.cards-restaurant');

    restaurants.forEach((resto) => (cardsContainer.innerHTML += restaurantUI(resto)));
  },
};

export default Restaurants;
