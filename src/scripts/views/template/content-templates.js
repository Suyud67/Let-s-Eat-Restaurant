import CONFIG from '../../config/config';
import { makeMenu, getReview } from '../../utils/destructur-data';

// make UI for restaurant content
const restaurantUI = (restaurant) => `
  <article class="card">
    <div class="img-card">
      <img data-src="${CONFIG.IMG_URL}/${restaurant.pictureId}" alt="image restaurant" class="lazyload img-restaurant " />
    </div>
    <div class="desc-restaurant">
      <h4>${restaurant.rating} <i class="fa-solid fa-star" style="color: #ffff00"></i></h4>
      <h3>${restaurant.name}</h3>
      <p>Position: ${restaurant.city}</p>
      <a href="#/detail/${restaurant.id}" class="btnDetail">Detail Restaurant <i class="fa-solid fa-arrow-right"></i></a>
    </div>
  </article>
`;

// make detail UI Resto
const detailRestoUI = (resto, reviews = resto.customerReviews) => {
  // eslint-disable-next-line object-curly-newline
  const { name, pictureId, address, city, description, menus } = resto;

  // destructuring foods, drinks, and reviews
  // for displaying to UI
  const { drinks, foods } = menus;

  const drinkMenu = makeMenu(drinks);
  const foodMenu = makeMenu(foods);
  const customerReview = getReview(reviews);

  return `
    <div class="detail-resto">
      <div class="img-card">
        <img data-src="${CONFIG.IMG_URL}/${pictureId}" alt="image restaurant" class="lazyload img-restaurant" />
      </div>
      <div class="detail_desc-resto">
        <h2>${name}</h2>
        <p>Address: ${address}, ${city}</p>
        <p>Description: ${description}</p>  
      </div>
    </div>

    <div class="container-menu">
      <h2 class="header-menus"><i class="fa-solid fa-utensils"></i> Foods Menu</h2>
      <ul class="menu-list">
        ${foodMenu}
      </ul>
      <h2 class="header-menus"><i class="fa-solid fa-mug-hot"></i> Drinks Menu</h4>
      <ul class="menu-list">
        ${drinkMenu}
      </ul>
    </div>

    <div class="card-reviews">
      <div class="header-review">
        <h2>Customer Reviews <i class="fa-regular fa-comments"></i></h2>
      </div>
      <div class="reviews">
        ${customerReview}
      </div>
    </div>
  `;
};

const createLikeButtonTemplate = () => `
  <button aria-label="add to favorite restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="delete from favorite restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line object-curly-newline
export { restaurantUI, detailRestoUI, createLikeButtonTemplate, createLikedButtonTemplate };
