/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Unfavorite Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResto.updateResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteResto.deleteResto(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="delete from favorite restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('[aria-label="delete from favorite restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // hapus dulu film dari daftar film yang disukai
    await FavoriteResto.deleteResto(1);
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="delete from favorite restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
