// import * as UiSelectors from './UiSelectors.js';

import {
  formElements,
  resultsSection,
  burger,
} from './UiSelectors.js';

import { CalculateCaloriesIntake } from './CalculateCaloriesIntake.js';
import validateForm from './ValidateForm.js';
import scrollToSection from './ScrollToSection.js';
import FillCaloriesFields from './FillCaloriesFields.js';
import { CountMacros } from './CountMacros.js';
import FillMacrosFields from './FillMacrosFields.js';
import switchMacros from './switchMacros.js';

//
const handleFormValue = (
  validationParam: boolean,
  param: HTMLElement,
  paramError: HTMLElement
) => {
  if (!validationParam) {
    param.classList.add('red');
    paramError.classList.add('active-error');
  } else {
    param.classList.remove('red');
    paramError.classList.remove('active-error');
  }
};

const showResults = (): void => {
  resultsSection.getElement('results').classList.add('show-results');
};

const hideResults = () => {
  resultsSection
    .getElement('results')
    .classList.remove('show-results');
};

//
const HandleForm = () => {
  const formValidationParams = validateForm();

  // const {height, heightError, ....} / [height, heightError, ...] = formElements.getElements(elementToSelect)

  const height = formElements.getElement('height');
  const heightError = formElements.getElement('heightError');
  const gender = formElements.getElement('gender');
  const activity = formElements.getElement('activity');
  const age = formElements.getElement('age');
  const ageError = formElements.getElement('ageError');
  const weight = formElements.getElement('weight');
  const weightError = formElements.getElement('weightError');

  const results = resultsSection.getElement('results');

  const formValues = {
    genderVal: gender.value,
    ageVal: Number(age.value),
    weightVal: Number(weight.value),
    heightVal: Number(height.value),
    activityVal: Number(activity.value),
  };

  handleFormValue(formValidationParams.age, age, ageError);
  handleFormValue(formValidationParams.height, height, heightError);
  handleFormValue(formValidationParams.weight, weight, weightError);

  if (
    Object.values(formValidationParams).every((val) => val === true)
  ) {
    const calories = CalculateCaloriesIntake(formValues);

    FillCaloriesFields(calories);

    const macros = CountMacros(calories);

    FillMacrosFields(macros.maintenance);

    switchMacros(macros);

    scrollToSection(results, showResults);
  } else scrollToSection(burger, hideResults);

  // return formValues;
};
export default HandleForm;
