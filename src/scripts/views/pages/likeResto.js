import FavoriteResto from '../../data/favorite-resto';
import { restaurantUI } from '../template/content-templates';
import makeLoader from '../../utils/loader';

const Like = {
  async render() {
    return `
    <div class="content">
      <div class="header-restaurant">
        <h2>Favorite Restaurants</h2>
      </div>
      <section class="cards-restaurant"></section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteResto.getAllResto();
    const containerResto = document.querySelector('.cards-restaurant');

    if (restaurants.length) {
      makeLoader();
      restaurants.forEach((restaurant) => (containerResto.innerHTML += restaurantUI(restaurant)));
    } else {
      makeLoader();
      containerResto.innerHTML = '<div class="movie-item__not__found">favorite restaurant is empty</div>';
    }
  },
};

export default Like;
