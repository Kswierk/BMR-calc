import { IIntake } from './CalculateCaloriesIntake.js';
import { macrosSectionElements } from './UiSelectors.js';

const setMacrosText = (
  // dailyCaloriesIntake: IIntake,
  macroText: string
) => {
  // const { dailiyIntake } = dailyCaloriesIntake;

  const macrosText = macrosSectionElements.getElement('macrosText');

  // const maintenanceText = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${dailiyIntake} kalorii</strong> dziennie`;
  // const cuttingText = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${Math.floor(
  //   dailiyIntake * 0.85
  // )} kalorii</strong> dzienie, co oznacza 15% deficyt kaloryczny od Twojego dziennego zapotrzebowania.`;
  // const bulkingText = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${Math.floor(
  //   dailiyIntake * 1.15
  // )} kalorii</strong> dzienie, co oznacza 15% surplus kaloryczny do Twojego dziennego zapotrzebowania.`;

  macrosText.innerHTML = macroText;
};

export default setMacrosText;
