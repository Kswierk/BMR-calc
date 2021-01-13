import * as UiSelectors from './UiSelectors.js';
interface IValidateForm {
  //   ageInput: HTMLInputElement ;
  initialize(): void;
  checkValues(): void;
}

class ValidateForm implements IValidateForm {
  constructor() {}

  initialize() {
    UiSelectors.button?.addEventListener('click', this.checkValues);
  }

  checkValues() {
    function addClass(
      input: HTMLInputElement | HTMLElement,
      className: string
    ) {
      input.classList.add(className);
    }

    const showResults = () => {
      return UiSelectors.resultsSection.classList.add('show-results');
    };
    const hideResults = () => {
      return UiSelectors.resultsSection.classList.remove('show-results');
    };

    const ageValue = UiSelectors.ageInput.valueAsNumber;
    const weightValue = UiSelectors.weightInput.valueAsNumber;
    const heightValue = UiSelectors.heightInput.valueAsNumber;

    const correctAgeInputValues = ageValue > 9 && ageValue < 100;
    const correctWeightInputValues = weightValue > 29 && weightValue < 201;
    const correctHeightInputValues = heightValue > 99 && heightValue < 251;

    if (!correctAgeInputValues) {
      addClass(UiSelectors.ageInput, 'red');
      addClass(UiSelectors.ageError, 'active-error');
    } else {
      UiSelectors.ageInput.classList.remove('red');
      UiSelectors.ageError.classList.remove('active-error');
    }
    if (!correctWeightInputValues) {
      UiSelectors.weightInput.classList.add('red');
      UiSelectors.weightError.classList.add('active-error');
    } else {
      UiSelectors.weightInput.classList.remove('red');
      UiSelectors.weightError.classList.remove('active-error');
    }
    if (!correctHeightInputValues) {
      UiSelectors.heightInput.classList.add('red');
      UiSelectors.heightError.classList.add('active-error');
    } else {
      UiSelectors.heightInput.classList.remove('red');
      UiSelectors.heightError.classList.remove('active-error');
    }

    const scrollToSection = (
      section: HTMLElement | Element,
      fn: () => void
    ) => {
      setTimeout(() => {
        fn();
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);
    };

    if (
      correctAgeInputValues &&
      correctHeightInputValues &&
      correctWeightInputValues
    ) {
      return scrollToSection(UiSelectors.dataStart, showResults);
    } else scrollToSection(UiSelectors.burger, hideResults);
  }
}

export default ValidateForm;
