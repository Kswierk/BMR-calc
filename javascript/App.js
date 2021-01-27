import Navbar from './Navbar.js';
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
