const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.movie-item__not__found');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('favorite restaurant is empty', '.movie-item__not__found');
});

Scenario('favorite one restaurant', async ({ I }) => {
  // favorite restaurant scenario
  I.see('favorite restaurant is empty', '.movie-item__not__found');
  I.amOnPage('/');

  // check .btnDetail from element .detail-restaurant
  // user click it and direct to /#/detail page
  let firstRestoLink = locate('.desc-restaurant .btnDetail').first();
  I.waitForElement('.desc-restaurant h3');
  const firstResto = locate('.desc-restaurant h3').first();
  const firstRestoTitle = await I.grabTextFrom('.desc-restaurant h3');
  I.click(firstRestoLink);

  // direct to detail page and check if there are a #likeButton element is exist
  // and when user click it will direct to /#/favorite page
  I.waitForElement('#likeButton');
  I.click('#likeButton');

  // when user in /#/favorite page
  // check if there are a .content element is exist
  I.amOnPage('/#/favorite');
  I.waitForElement('.desc-restaurant h3');
  const favRestoTitle = await I.grabTextFrom('.desc-restaurant h3');

  assert.strictEqual(firstRestoTitle, favRestoTitle);

  // unfavorite restaurant scenario
  // take .btnDetail in /favorite page
  // and user will direct to detail page restaurant if he click the .btnDetail
  firstRestoLink = locate('.desc-restaurant .btnDetail').first();
  I.click(firstRestoLink);

  // wait element #likeButton render
  // and if user click it then favorite restaurant is empty
  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // direct to /favorite page
  // and user will see the item of favorite restaurant is empty
  I.amOnPage('/#/favorite');
  I.waitForElement('.movie-item__not__found');
  I.see('favorite restaurant is empty', '.movie-item__not__found');
});
