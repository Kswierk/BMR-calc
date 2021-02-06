import FillMacrosFields from './FillMacrosFields.js';
import { macrosSectionElements } from './UiSelectors.js';
const switchMacros = (macros) => {
    const maintenanceButton = macrosSectionElements.getElement('maintenanceButton');
    const cuttingButton = macrosSectionElements.getElement('cuttingButton');
    const bulkingButton = macrosSectionElements.getElement('bulkingButton');
    maintenanceButton.addEventListener('click', () => FillMacrosFields(macros.maintenance));
    cuttingButton.addEventListener('click', () => FillMacrosFields(macros.cutting));
    bulkingButton.addEventListener('click', () => FillMacrosFields(macros.bulking));
};
export default switchMacros;
