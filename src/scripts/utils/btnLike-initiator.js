import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template/content-templates';

// TODO: create functionality for button like
const LikeButtonInitiator = {
  async init({ likeButtonContainer, favResto, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._favResto = favResto;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;
    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  // get resto from indexDB
  async _isRestoExist(id) {
    const restoExist = await this._favResto.getResto(id);
    return !!restoExist;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favResto.updateResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
