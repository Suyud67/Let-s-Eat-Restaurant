import { Workbox } from 'workbox-window';
// todo: register Service Worker

const swRegister = async () => {
  // check your browser support service worker
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  try {
    // register SW in root folder
    const wb = new Workbox('./sw.js');
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
