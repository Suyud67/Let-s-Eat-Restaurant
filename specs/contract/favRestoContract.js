/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (FavoriteResto) => {
  it('should return the restaurnat that has been added', async () => {
    FavoriteResto.updateResto({ id: 1 });
    FavoriteResto.updateResto({ id: 2 });

    expect(await FavoriteResto.getResto(1)).toEqual({ id: 1 });
    expect(await FavoriteResto.getResto(2)).toEqual({ id: 2 });
    expect(await FavoriteResto.getResto(3)).toEqual(undefined);
  });

  it('should refuse a restaurnat from being added if it does not have the correct property', async () => {
    FavoriteResto.updateResto({ aProperty: 'property' });

    expect(await FavoriteResto.getAllResto()).toEqual([]);
  });

  it('can return all of the restaurnats that have been added', async () => {
    FavoriteResto.updateResto({ id: 1 });
    FavoriteResto.updateResto({ id: 2 });

    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurnat', async () => {
    FavoriteResto.updateResto({ id: 1 });
    FavoriteResto.updateResto({ id: 2 });
    FavoriteResto.updateResto({ id: 3 });

    await FavoriteResto.deleteResto(1);

    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurnat even though the restaurnat has not been added', async () => {
    FavoriteResto.updateResto({ id: 1 });
    FavoriteResto.updateResto({ id: 2 });
    FavoriteResto.updateResto({ id: 3 });

    await FavoriteResto.deleteResto(4);

    expect(await FavoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestoModel };
