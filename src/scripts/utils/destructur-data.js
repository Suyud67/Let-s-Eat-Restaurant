/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
// TODO: destructuring data from data fetch and make it easy to use and clear
const makeMenu = (menus) => {
  let menuList = '';
  menus.map((menu) => (menuList += `<li class="menu">${menu.name}</li>`));

  return menuList;
};

// make an element for review data
const getReview = (reviews) => {
  let contentReview = '';
  reviews.forEach(
    (review) =>
      (contentReview += `
      <div class="content-review">
        <div class="icon-review">
          <i class="fa-solid fa-user user"></i>
        </div>
        <div class="review">
          <h3>Name: ${review.name}</h3>
          <i>${review.date}</i>
          <p>Review: "${review.review}"</p>
        </div>
      </div>`)
  );
  return contentReview;
};

export { makeMenu, getReview };
