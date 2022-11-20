/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';

let favoriteRestaurant = [];

const FavoriteMovieArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteRestaurant.find((movie) => movie.id == id);
  },

  getAllResto() {
    return favoriteRestaurant;
  },

  updateResto(movie) {
    if (!movie.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getResto(movie.id)) {
      return;
    }

    favoriteRestaurant.push(movie);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((movie) => movie.id != id);
  },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurant = []));

  itActsAsFavoriteRestoModel(FavoriteMovieArray);
});
