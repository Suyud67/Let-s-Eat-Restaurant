/* eslint-disable import/no-cycle */
import EventHandler from '../utils/event-handler';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  // eslint-disable-next-line object-curly-newline
  constructor({ hamburger, listItems, linkItems, contentResto }) {
    this._hamburger = hamburger;
    this._listItems = listItems;
    this._linkItems = linkItems;
    this._content = contentResto;

    this._initialAppShell();
  }

  _initialAppShell() {
    // TODO: initial Drawer
    EventHandler.init({
      hamburger: this._hamburger,
      listItems: this._listItems,
      linkItems: this._linkItems,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
