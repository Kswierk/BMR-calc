import { CountMacros } from './CountMacros.js';
import FillCaloriesFields from './FillCaloriesFields.js';
export const CalculateCaloriesIntake = (formValues) => {
    const { genderVal, ageVal, weightVal, heightVal, activityVal, } = formValues;
    const maleBaseCalories = 66 + 13.7 * weightVal + 5 * heightVal - 6.76 * ageVal;
    const femaleBaseCalories = 655 + 9.6 * weightVal + 1.8 * heightVal - 4.7 * ageVal;
    const countCalories = (activityLevelMultipier) => {
        if (genderVal === 'male') {
            return Math.round(maleBaseCalories * activityLevelMultipier);
        }
        else
            return Math.round(femaleBaseCalories * activityLevelMultipier);
    };
    const caloriesIntake = {
        dailiyIntake: countCalories(activityVal),
        weeklyIntake: countCalories(activityVal) * 7,
        baseActivity: countCalories(1),
        lowActivity: countCalories(1.2),
        moderateActivity: countCalories(1.375),
        highModerateActivity: countCalories(1.55),
        highActivity: countCalories(1.725),
        vHighActivity: countCalories(1.9),
    };
    FillCaloriesFields(caloriesIntake);
    CountMacros(caloriesIntake);
    // czy return caloriesIntake i przypisuje to do zmiennej w fillcaloriesfields;
};
