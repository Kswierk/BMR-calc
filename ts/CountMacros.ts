import {
  CalculateCaloriesIntake,
  IIntake,
} from './CalculateCaloriesIntake.js';

export interface IMacros {
  balancedProtein: number;
  balancedFat: number;
  balancedCarbs: number;

  highCarbProtein: number;
  highCarbFat: number;
  highCarbCarbs: number;

  ketoProtein: number;
  ketoFat: number;
  ketoCarbs: number;
}

export interface ICountedMacros {
  maintenance: IMacros;
  cutting: IMacros;
  bulking: IMacros;
}

export const CountMacros = (caloriesValues: IIntake) => {
  const { dailiyIntake } = caloriesValues;

  const calculateMacros = (
    percentOfCaloriesAsDecimal: number,
    caloriesPerGram: number
  ) => {
    return Math.floor(
      (dailiyIntake * percentOfCaloriesAsDecimal) / caloriesPerGram
    );
  };

  const maintenanceMacros: IMacros = {
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

  const objectMap = (
    objectToMap: IMacros,
    fn: (value: number, key: string) => number
  ) =>
    Object.fromEntries(
      Object.entries(objectToMap).map(([key, value]) => [
        key,
        fn(value, key),
      ])
    );

  const cuttingMacros = objectMap(maintenanceMacros, (value) =>
    Math.round(value * 0.85)
  );

  const bulkingMacros = objectMap(maintenanceMacros, (value) =>
    Math.round(value * 1.15)
  );

  const countedMacrosObject: ICountedMacros = {
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
