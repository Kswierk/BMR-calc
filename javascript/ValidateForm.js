import * as UiSelectors from './UiSelectors.js';
const validateForm = () => {
    const validationSchema = {
        age: null,
        weight: null,
        height: null,
    };
    const ageValue = UiSelectors.ageInput.valueAsNumber;
    const weightValue = UiSelectors.weightInput.valueAsNumber;
    const heightValue = UiSelectors.heightInput.valueAsNumber;
    const correctAgeInputValues = ageValue > 9 && ageValue < 100;
    const correctWeightInputValues = weightValue > 29 && weightValue < 201;
    const correctHeightInputValues = heightValue > 99 && heightValue < 251;
    if (!correctAgeInputValues) {
        validationSchema.age = false;
    }
    else {
        validationSchema.age = true;
    }
    if (!correctWeightInputValues) {
        validationSchema.weight = false;
    }
    else {
        validationSchema.weight = true;
    }
    if (!correctHeightInputValues) {
        validationSchema.height = false;
    }
    else {
        validationSchema.height = true;
    }
    return validationSchema;
};
export default validateForm;
