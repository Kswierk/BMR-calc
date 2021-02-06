import { formElements } from './UiSelectors.js';

export interface IvalidationSchema {
  age: boolean;
  weight: boolean;
  height: boolean;
}

const validateForm = (form = formElements): IvalidationSchema => {
  const validationSchema: IvalidationSchema = {
    age: false,
    weight: false,
    height: false,
  };

  const height = form.getElement('height');
  const age = form.getElement('age');
  const weight = form.getElement('weight');

  const correctAgeInputValues = age.value > 9 && age.value < 100;

  const correctWeightInputValues =
    weight.value > 29 && weight.value < 201;

  const correctHeightInputValues =
    height.value > 99 && height.value < 251;

  validationSchema.age = correctAgeInputValues;

  validationSchema.weight = correctWeightInputValues;

  validationSchema.height = correctHeightInputValues;

  return validationSchema;
};

export default validateForm;
