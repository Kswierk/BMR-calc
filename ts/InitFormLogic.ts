import HandleForm from './HandleForm.js';
import { formElements } from './UiSelectors.js';
// import { values } from './CalculateCaloriesIntake.js';

const button = formElements.getElement('button');

const InitFormLogic = () => {
  button.addEventListener('click', HandleForm);
};

export default InitFormLogic;
