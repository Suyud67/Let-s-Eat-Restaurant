// todo: event handler for hamburger and navbar btn
const EventHandler = {
  init({ hamburger, listItems, linkItems }) {
    hamburger.addEventListener('click', (event) => {
      event.preventDefault();
      this._toggleDrawer(event, listItems);
    });

    linkItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        this._closeDrawer(e, listItems);
      });
    });
  },

  _toggleDrawer(event, listItems) {
    event.stopPropagation();
    listItems.classList.toggle('active');
  },

  _closeDrawer(event, listItems) {
    event.stopPropagation();
    listItems.classList.remove('active');
  },
};

export default EventHandler;
