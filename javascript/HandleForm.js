import * as UiSelectors from './UiSelectors.js';
import validateForm from './ValidateForm.js';
import scrollToSection from './ScrollToSection.js';
const HandleForm = () => {
    const formValidationParams = validateForm();
    const showResults = () => {
        return UiSelectors.resultsSection.classList.add('show-results');
    };
    const hideResults = () => {
        return UiSelectors.resultsSection.classList.remove('show-results');
    };
    if (!formValidationParams.age) {
        UiSelectors.ageInput.classList.add('red');
        UiSelectors.ageError.classList.add('active-error');
    }
    else {
        UiSelectors.ageInput.classList.remove('red');
        UiSelectors.ageError.classList.remove('active-error');
    }
    if (!formValidationParams.weight) {
        UiSelectors.weightInput.classList.add('red');
        UiSelectors.weightError.classList.add('active-error');
    }
    else {
        UiSelectors.weightInput.classList.remove('red');
        UiSelectors.weightError.classList.remove('active-error');
    }
    if (!formValidationParams.height) {
        UiSelectors.heightInput.classList.add('red');
        UiSelectors.heightError.classList.add('active-error');
    }
    else {
        UiSelectors.heightInput.classList.remove('red');
        UiSelectors.heightError.classList.remove('active-error');
    }
    if (Object.values(formValidationParams).every((val) => val === true)) {
        return scrollToSection(UiSelectors.dataStart, showResults);
    }
    else
        scrollToSection(UiSelectors.burger, hideResults);
};
export default HandleForm;
