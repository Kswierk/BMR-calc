import * as UiSelectors from './UiSelectors.js';
import validateForm from './ValidateForm.js';
import scrollToSection from './ScrollToSection.js';

const HandleForm = (form = UiSelectors.form) => {
  const formValidationParams = validateForm();

  const {
    resultsSection,
    age,
    ageError,
    weight,
    weightError,
    height,
    heightError,
    gender,
    activity,
    dataStart,
    burger,
  } = UiSelectors;

  const formValues = {
    genderVal: gender.value,
    ageVal: age.value,
    weightVal: weight.value,
    heightVal: height.value,
    activityVal: activity.value,
  };

  console.log(formValues);

  const showResults = () => {
    return resultsSection.classList.add('show-results');
  };
  const hideResults = () => {
    return resultsSection.classList.remove('show-results');
  };

  if (!formValidationParams.age) {
    age.classList.add('red');
    ageError.classList.add('active-error');
  } else {
    age.classList.remove('red');
    ageError.classList.remove('active-error');
  }

  if (!formValidationParams.weight) {
    weight.classList.add('red');
    weightError.classList.add('active-error');
  } else {
    weight.classList.remove('red');
    weightError.classList.remove('active-error');
  }

  if (!formValidationParams.height) {
    height.classList.add('red');
    heightError.classList.add('active-error');
  } else {
    height.classList.remove('red');
    heightError.classList.remove('active-error');
  }

  if (
    Object.values(formValidationParams).every((val) => val === true)
  ) {
    scrollToSection(dataStart, showResults);
  } else scrollToSection(burger, hideResults);
};
export default HandleForm;
