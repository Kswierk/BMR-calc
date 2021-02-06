export const CountMacros = (caloriesValues) => {
    const { dailiyIntake } = caloriesValues;
    const calculateMacros = (percentOfCaloriesAsDecimal, caloriesPerGram) => {
        return Math.floor((dailiyIntake * percentOfCaloriesAsDecimal) / caloriesPerGram);
    };
    const maintenanceMacros = {
        balancedProtein: calculateMacros(0.2, 4),
        balancedFat: calculateMacros(0.45, 9),
        balancedCarbs: calculateMacros(0.35, 4),
        highCarbProtein: calculateMacros(0.3, 4),
        highCarbFat: calculateMacros(0.2, 9),
        highCarbCarbs: calculateMacros(0.5, 4),
        ketoProtein: calculateMacros(0.2, 4),
        ketoFat: calculateMacros(0.77, 9),
        ketoCarbs: calculateMacros(0.03, 4),
    };
    const objectMap = (objectToMap, fn) => Object.fromEntries(Object.entries(objectToMap).map(([key, value]) => [
        key,
        fn(value, key),
    ]));
    const cuttingMacros = objectMap(maintenanceMacros, (value) => Math.round(value * 0.85));
    const bulkingMacros = objectMap(maintenanceMacros, (value) => Math.round(value * 1.15));
    const countedMacrosObject = {
        maintenance: maintenanceMacros,
        cutting: cuttingMacros,
        bulking: bulkingMacros,
    };
    return countedMacrosObject;
    // return {
    //   maintenance: maintenanceMacros,
    //   cutting: cuttingMacros,
    //   bulking: bulkingMacros,
    // };
};
