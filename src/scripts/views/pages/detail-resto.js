/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
import UrlParser from '../../routes/url-parser';
import { detailRestaurant, postNewReview } from '../../data/list-restaurant';
import { detailRestoUI } from '../template/content-templates';
import LikeButtonInitiator from '../../utils/btnLike-initiator';
import FavoriteResto from '../../data/favorite-resto';
import '../../component/form-review';

// render detail restaurant
const DetailResto = {
  async render() {
    return `
    <div class="header-restaurant">
        <h2>Detail Restaurant</h2>
    </div>
    <section class="review-content"></section>
    <div class="likeButtonContainer"></div>
    <form-review></form-review>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await detailRestaurant(url.id);

    // get container restaurant, form review
    const cardsContainer = document.querySelector('.review-content');
    const formReview = document.querySelector('form-review');

    // render detail resto
    cardsContainer.innerHTML = detailRestoUI(resto);

    // form submited
    const formSubmited = async (e) => {
      e.preventDefault();
      formReview.username;
      formReview.review;
      try {
        const { customerReviews, message } = await postNewReview(resto.id, formReview.username, formReview.review);
        alert(message);

        cardsContainer.innerHTML = detailRestoUI(resto, customerReviews);
        e.target.reset();
      } catch (error) {
        alert(error);
      }
    };
    formReview.submitEvent = formSubmited;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.likeButtonContainer'),
      favResto: FavoriteResto,
      resto,
    });
  },
};

export default DetailResto;
