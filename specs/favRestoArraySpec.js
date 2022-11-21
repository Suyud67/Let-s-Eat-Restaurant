/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

let favoriteRestaurant = [];

const FavoriteRestaurant = {
  getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteRestaurant.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteRestaurant;
  },

  updateResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestaurant.push(resto);
  },

  deleteResto(id) {
    favoriteRestaurant = favoriteRestaurant.filter((resto) => resto.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurant = []));

  itActsAsFavoriteRestoModel(FavoriteRestaurant);
});
