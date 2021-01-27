import HandleForm from './HandleForm.js';
import { formElements } from './UiSelectors.js';

const button = formElements.getElement('button');

const InitFormLogic = () => {
  button.addEventListener('click', HandleForm);
};

export default InitFormLogic;
