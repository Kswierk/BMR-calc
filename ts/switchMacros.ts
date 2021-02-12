import FillMacrosFields from './FillMacrosFields.js';
import { macrosSectionElements } from './UiSelectors.js';
import { IIntake } from './CalculateCaloriesIntake.js';
import { ICountedMacros } from './CountMacros';
import setMacrosText from './setMacrosText.js';

interface IMappedObjectInteface {
  maintenance: number;
  [k: string]: number;
}

const switchMacros = (
  macros: ICountedMacros,
  dailyCaloriesIntake: IIntake
) => {
  const { dailiyIntake } = dailyCaloriesIntake;

  const maintenanceButton = macrosSectionElements.getElement(
    'maintenanceButton'
  );
  const cuttingButton = macrosSectionElements.getElement(
    'cuttingButton'
  );
  const bulkingButton = macrosSectionElements.getElement(
    'bulkingButton'
  );

  const maintenanceText = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${dailiyIntake} kalorii</strong> dziennie`;
  const cuttingText = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${Math.floor(
    dailiyIntake * 0.85
  )} kalorii</strong> dzienie, co oznacza 15% deficyt kaloryczny od Twojego dziennego zapotrzebowania.`;
  const bulkingText = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${Math.floor(
    dailiyIntake * 1.15
  )} kalorii</strong> dzienie, co oznacza 15% surplus kaloryczny do Twojego dziennego zapotrzebowania.`;

  setMacrosText(maintenanceText);

  maintenanceButton.addEventListener('click', () => {
    setMacrosText(maintenanceText),
      FillMacrosFields(macros.maintenance);
  });
  cuttingButton.addEventListener('click', () => {
    setMacrosText(cuttingText), FillMacrosFields(macros.cutting);
  });
  bulkingButton.addEventListener('click', () => {
    setMacrosText(bulkingText), FillMacrosFields(macros.bulking);
  });
};

export default switchMacros;
