import { formElements } from './UiSelectors.js';

interface IvalidationSchema {
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

  // correctAgeInputValues
  //   ? (validationSchema.age = true)
  //   : (validationSchema.age = false);

  // const correctWeightInputValues =
  //   weight.value > 29 && weight.value < 201;

  // correctWeightInputValues
  //   ? (validationSchema.weight = true)
  //   : (validationSchema.weight = false);

  // const correctHeightInputValues =
  //   height.value > 99 && height.value < 251;

  // correctHeightInputValues
  //   ? (validationSchema.height = true)
  //   : (validationSchema.height = false);

  // const formAsObject = { ...form };
  // Object.entries(formAsObject).forEach(([key, formElement]) => {
  //   switch (formElement.name) {
  //     case 'age':
  //       const correctAgeInputValues =
  //         formElement.value > 9 && formElement.value < 100;

  //       correctAgeInputValues
  //         ? (validationSchema.age = true)
  //         : (validationSchema.age = false);

  //       break;

  //     case 'weight':
  //       const correctWeightInputValues =
  //         formElement.value > 29 && formElement.value < 201;

  //       correctWeightInputValues
  //         ? (validationSchema.weight = true)
  //         : (validationSchema.weight = false);
  //       break;

  //     case 'height':
  //       const correctHeightInputValues =
  //         formElement.value > 99 && formElement.value < 251;

  //       correctHeightInputValues
  //         ? (validationSchema.height = true)
  //         : (validationSchema.height = false);
  //       break;
  //   }
  // });

  return validationSchema;
};

export default validateForm;
