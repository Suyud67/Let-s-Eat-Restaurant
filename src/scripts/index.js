/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import '../styles/main.css';
import '../styles/responsiveIndex.css';

import App from './views/app';
import swRegister from './utils/sw-register';

// mengambil elemen untuk event listener
const hamburger = document.querySelector('.hamburger');
const listItems = document.querySelector('.list-items');
const linkItems = document.querySelectorAll('.link-item');
const containerResto = document.getElementById('maincontent');

const app = new App({
  hamburger,
  listItems,
  linkItems,
  contentResto: containerResto,
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
