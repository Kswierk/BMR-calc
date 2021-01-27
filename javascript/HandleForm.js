// import * as UiSelectors from './UiSelectors.js';
import { formElements, resultsSection, burger, } from './UiSelectors.js';
import validateForm from './ValidateForm.js';
import scrollToSection from './ScrollToSection.js';
const HandleForm = () => {
    const formValidationParams = validateForm();
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
        ageVal: age.value,
        weightVal: weight.value,
        heightVal: height.value,
        activityVal: activity.value,
    };
    console.log(formValidationParams);
    const handleFormValue = (validationParam, param, paramError) => {
        if (!validationParam) {
            param.classList.add('red');
            paramError.classList.add('active-error');
        }
        else {
            param.classList.remove('red');
            paramError.classList.remove('active-error');
        }
    };
    handleFormValue(formValidationParams.age, age, ageError);
    handleFormValue(formValidationParams.height, height, heightError);
    handleFormValue(formValidationParams.weight, weight, weightError);
    const showResults = () => {
        return results.classList.add('show-results');
    };
    const hideResults = () => {
        return results.classList.remove('show-results');
    };
    if (Object.values(formValidationParams).every((val) => val === true)) {
        scrollToSection(results, showResults);
    }
    else
        scrollToSection(burger, hideResults);
    return formValues;
};
export default HandleForm;
