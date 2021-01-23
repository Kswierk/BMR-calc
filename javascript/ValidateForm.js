import * as UiSelectors from './UiSelectors.js';
const validateForm = (form = UiSelectors.formStructure) => {
    const validationSchema = {
        age: false,
        weight: false,
        height: false,
    };
    const { height, age, weight } = UiSelectors;
    const correctAgeInputValues = age.value > 9 && age.value < 100;
    correctAgeInputValues
        ? (validationSchema.age = true)
        : (validationSchema.age = false);
    const correctWeightInputValues = weight.value > 29 && weight.value < 201;
    correctWeightInputValues
        ? (validationSchema.weight = true)
        : (validationSchema.weight = false);
    const correctHeightInputValues = height.value > 99 && height.value < 251;
    correctHeightInputValues
        ? (validationSchema.height = true)
        : (validationSchema.height = false);
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
