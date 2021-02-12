import {
  hamwiValueInput,
  millerValueInput,
  devineValueInput,
  robinsonValueInput,
} from './UiSelectors.js';

interface ICalculatedIdealWeight {
  hamwiVal: number;
  devineVal: number;
  robinsonVal: number;
  millerVal: number;
}
const fillIdealWeightInputs = (
  calculatedIdealWeights: ICalculatedIdealWeight
) => {
  if (!robinsonValueInput || !devineValueInput) {
    throw new Error('siema');
  }

  hamwiValueInput.forEach(
    (inputElement) =>
      (inputElement.innerHTML = `${calculatedIdealWeights.hamwiVal} kg`)
  );
  devineValueInput.innerHTML = `${calculatedIdealWeights.devineVal} kg`;
  millerValueInput.forEach(
    (inputElement) =>
      (inputElement.innerHTML = `${calculatedIdealWeights.millerVal} kg`)
  );
  robinsonValueInput.innerHTML = `${calculatedIdealWeights.robinsonVal} kg`;
};

export default fillIdealWeightInputs;
