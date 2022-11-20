class FormReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set submitEvent(event) {
    this._submitEvent = event;
    this.render();
  }

  get username() {
    return this.querySelector('#username').value;
  }

  get review() {
    return this.querySelector('#review').value;
  }

  render() {
    this.innerHTML = `
    <div class="container-review">
      <div class="header-form">
        <h2>Add Review</h2>
      </div>
      <form action="/review" method="post" id="formReview">
        <div class="username">
          <label for="username">Username: </label>
          <input type="text" name="username" id="username" required/>
        </div>
        <div class="field-review">
          <label for="review">Review: </label>
          <input type="text" name="review" id="review" required/>
        </div>
        <button type="submit" id="btnSubmit">Submit</button>
      </form>
    </div>
    `;

    this.querySelector('#formReview').addEventListener('submit', this._submitEvent);
  }
}

customElements.define('form-review', FormReview);
