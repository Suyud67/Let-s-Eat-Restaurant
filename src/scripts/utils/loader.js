// make loading animation
const makeLoader = () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.classList.remove('loader-active');
  });
};

export default makeLoader;
