import Navbar from './Navbar.js';
import HandleForm from './HandleForm.js';
import * as UiSelectors from './UiSelectors.js';
import InitFormLogic from './InitFormLogic.js';

const initApp = () => {
  // if (!UiSelectors.button) {
  //   throw new Error('dont have button');
  // }
  Navbar();
  // HandleForm();
  InitFormLogic();
  // UiSelectors.button.addEventListener('click', HandleForm);
};
window.addEventListener('DOMContentLoaded', initApp);
