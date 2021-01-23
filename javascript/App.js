import Navbar from './Navbar.js';
import HandleForm from './HandleForm.js';
import * as UiSelectors from './UiSelectors.js';
const initApp = () => {
    if (!UiSelectors.button) {
        throw new Error('dont have button');
    }
    Navbar();
    // const form = initFormLogic();
    UiSelectors.button.addEventListener('click', HandleForm);
};
window.addEventListener('DOMContentLoaded', initApp);
