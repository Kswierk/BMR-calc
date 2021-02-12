const countBmi = (formValues) => {
    const { heightVal, weightVal } = formValues;
    const heightInMeters = heightVal / 100;
    const bmi = Math.round(weightVal / (heightInMeters * heightInMeters));
    return bmi;
};
export default countBmi;
