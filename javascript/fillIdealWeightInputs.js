import { hamwiValueInput, millerValueInput, devineValueInput, robinsonValueInput, } from './UiSelectors.js';
const fillIdealWeightInputs = (calculatedIdealWeights) => {
    if (!robinsonValueInput || !devineValueInput) {
        throw new Error('siema');
    }
    hamwiValueInput.forEach((inputElement) => (inputElement.innerHTML = `${calculatedIdealWeights.hamwiVal} kg`));
    devineValueInput.innerHTML = `${calculatedIdealWeights.devineVal} kg`;
    millerValueInput.forEach((inputElement) => (inputElement.innerHTML = `${calculatedIdealWeights.millerVal} kg`));
    robinsonValueInput.innerHTML = `${calculatedIdealWeights.robinsonVal} kg`;
};
export default fillIdealWeightInputs;
