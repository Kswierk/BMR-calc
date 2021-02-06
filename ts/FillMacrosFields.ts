import { macrosSectionElements } from './UiSelectors.js';
import { IMacros } from './CountMacros';

const FillMacrosFields = (macros: IMacros) => {
  const {
    balancedProtein,
    balancedFat,
    balancedCarbs,

    highCarbProtein,
    highCarbFat,
    highCarbCarbs,

    ketoProtein,
    ketoFat,
    ketoCarbs,
  } = macros;

  const balancedProteinInput = macrosSectionElements.getElement(
    'moderateProteinVal'
  );
  const balancedFatInput = macrosSectionElements.getElement(
    'moderateFatsVal'
  );
  const balancedCarbInput = macrosSectionElements.getElement(
    'moderateCarbsVal'
  );
  const highProteinInput = macrosSectionElements.getElement(
    'highCarbProteinVal'
  );
  const highFatInput = macrosSectionElements.getElement(
    'highCarbFatsVal'
  );
  const highCarbInput = macrosSectionElements.getElement(
    'highCarbCarbsVal'
  );
  const ketoProteinInput = macrosSectionElements.getElement(
    'ketoProteinVal'
  );
  const ketoFatInput = macrosSectionElements.getElement(
    'ketoFatsVal'
  );
  const ketoCarbInput = macrosSectionElements.getElement(
    'ketoCarbsVal'
  );

  balancedProteinInput.innerHTML = balancedProtein;
  balancedFatInput.innerHTML = balancedFat;
  balancedCarbInput.innerHTML = balancedCarbs;

  ketoProteinInput.innerHTML = ketoProtein;
  ketoFatInput.innerHTML = ketoFat;
  ketoCarbInput.innerHTML = ketoCarbs;

  highProteinInput.innerHTML = highCarbProtein;
  highFatInput.innerHTML = highCarbFat;
  highCarbInput.innerHTML = highCarbCarbs;
};

export default FillMacrosFields;
