/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favRestoContract';
import FavoriteResto from '../src/scripts/data/favorite-resto';

describe('Favorite Restaurant IDB Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllResto()).forEach(async (resto) => {
      await FavoriteResto.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});
