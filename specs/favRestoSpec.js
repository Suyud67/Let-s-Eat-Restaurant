/* eslint-disable no-undef */
import FavoriteResto from '../src/scripts/data/favorite-resto';
import * as TestFactories from './helpers/testFactories';

describe('Favorite Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div class="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="add to favorite restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="delete from favorite restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteResto.getResto(1);
    expect(restaurant).toEqual({ id: 1 });

    FavoriteResto.deleteResto(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteResto.updateResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 1 }]);

    FavoriteResto.deleteResto(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });
});
