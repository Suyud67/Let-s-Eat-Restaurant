// todo: event handler for hamburger and navbar btn
const EventHandler = {
  init({ hamburger, listItems, linkItems }) {
    hamburger.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, listItems, hamburger);
    });

    linkItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        this._closeDrawer(e, listItems, hamburger);
      });
    });
  },

  _toggleDrawer(event, listItems, hamburger) {
    event.stopPropagation();
    listItems.classList.toggle('active');
    hamburger.classList.toggle('active');
  },

  _closeDrawer(event, listItems, hamburger) {
    event.stopPropagation();
    listItems.classList.remove('active');
    hamburger.classList.toggle('active');
  },
};

export default EventHandler;
