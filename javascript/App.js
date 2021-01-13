import Navbar from './Navbar.js';
import ValidateForm from './ValidateForm.js';
const validateform = new ValidateForm();
const addListeners = () => {
    Navbar();
    validateform.initialize();
};
window.addEventListener('DOMContentLoaded', addListeners);
