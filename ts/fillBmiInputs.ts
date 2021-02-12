import { bmiText, bmiSpan } from './UiSelectors.js';

const fillBmiInputs = (bmiValue: number) => {
  bmiSpan.forEach(
    (element: Element) => (element.innerHTML = `${bmiValue}`)
  );

  const underWeight = bmiValue < 18.5;
  const properWeight = bmiValue >= 18.5 && bmiValue < 25;
  const overweight = bmiValue >= 25 && bmiValue < 30;
  const obesity = bmiValue > 30;

  if (!bmiText) {
    throw new Error('there is no such bmiText element');
  }

  if (underWeight) {
    bmiText.innerHTML = 'niedowagę';
  } else if (properWeight) {
    bmiText.innerHTML = 'prawidłową wagę';
  } else if (overweight) {
    bmiText.innerHTML = 'nadwagę';
  } else if (obesity) {
    bmiText.innerHTML = 'otyłość';
  }
};

export default fillBmiInputs;
