/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/btnLike-initiator';
import FavoriteResto from '../../src/scripts/data/favorite-resto';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('.likeButtonContainer'),
    favResto: FavoriteResto,
    resto: restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
