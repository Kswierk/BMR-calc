import {
  CalculateCaloriesIntake,
  IIntake,
} from './CalculateCaloriesIntake.js';

import { caloriesIntakeSection } from './UiSelectors.js';

const FillCaloriesFields = (caloriesValues: IIntake) => {
  const {
    dailiyIntake,
    weeklyIntake,
    baseActivity,
    lowActivity,
    moderateActivity,
    highModerateActivity,
    highActivity,
    vHighActivity,
  } = caloriesValues;

  const caloriesPerDayInput = caloriesIntakeSection.getElement(
    'dailyIntake'
  );
  const caloriesPerWeekInput = caloriesIntakeSection.getElement(
    'weeklyIntake'
  );
  const bestCaloriesInput = caloriesIntakeSection.getElement(
    'bestIntake'
  );
  const baseActivityInput = caloriesIntakeSection.getElement(
    'baseActivity'
  );
  const lowActivityInput = caloriesIntakeSection.getElement(
    'lowActivity'
  );
  const moderateActivityInput = caloriesIntakeSection.getElement(
    'moderateActivity'
  );
  const highModerateActivityInput = caloriesIntakeSection.getElement(
    'highModerateActivity'
  );
  const highActivityInput = caloriesIntakeSection.getElement(
    'highActivity'
  );
  const vhighActivityInput = caloriesIntakeSection.getElement(
    'vhighActivity'
  );

  caloriesPerDayInput.innerHTML = dailiyIntake;
  caloriesPerWeekInput.innerHTML = weeklyIntake;
  bestCaloriesInput.innerHTML = dailiyIntake;
  baseActivityInput.innerHTML = baseActivity;
  lowActivityInput.innerHTML = lowActivity;
  moderateActivityInput.innerHTML = moderateActivity;
  highModerateActivityInput.innerHTML = highModerateActivity;
  highActivityInput.innerHTML = highActivity;
  vhighActivityInput.innerHTML = vHighActivity;
};

export default FillCaloriesFields;
