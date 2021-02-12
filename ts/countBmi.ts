import { IFormValues } from './CalculateCaloriesIntake.js';

const countBmi = (formValues: IFormValues) => {
  const { heightVal, weightVal } = formValues;

  const heightInMeters = heightVal / 100;

  const bmi = Math.round(
    weightVal / (heightInMeters * heightInMeters)
  );
  return bmi;
};

export default countBmi;
