const caluclateProperWeight = (formValues) => {
    const { heightVal, genderVal } = formValues;
    const calculateProperWeightFromFormula = (firstMultipierValue, secondMultipierValue) => {
        return Math.round(firstMultipierValue +
            secondMultipierValue * (heightVal / 2.54 - 60));
    };
    if (genderVal === 'male') {
        return {
            hamwiVal: calculateProperWeightFromFormula(48, 2.7),
            devineVal: calculateProperWeightFromFormula(50, 2.3),
            robinsonVal: calculateProperWeightFromFormula(52, 1.9),
            millerVal: calculateProperWeightFromFormula(56.2, 1.41),
        };
    }
    else
        return {
            hamwiVal: calculateProperWeightFromFormula(45.5, 2.2),
            devineVal: calculateProperWeightFromFormula(45.5, 2.3),
            robinsonVal: calculateProperWeightFromFormula(49, 1.9),
            millerVal: calculateProperWeightFromFormula(53.1, 1.36),
        };
};
export default caluclateProperWeight;
