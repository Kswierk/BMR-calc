//Navbar Selectors
export const burger = document.querySelector('.burger')!;
export const nav = document.querySelector('.navbar__list')!;
export const navLinks = document.querySelectorAll(
  '.navbar__item'
) as NodeListOf<HTMLElement>;

interface IElements {
  [name: string]: HTMLElement;
}

//jak otypowac elements
class Elements {
  elements: any;
  constructor() {
    this.elements = {
      // string name: HTMLElement
    };
  }

  addElement(
    query: string,
    name: string,
    withErrorInput: boolean = false
  ) {
    const selected = document.querySelector(query);

    if (!selected) {
      throw new Error(`there is no such ${query} element in body`);
    }

    this.elements[name] = selected;

    if (withErrorInput) {
      const error_query = `.${name}__input-error`;

      const selected = document.querySelector(error_query);

      if (!selected) {
        throw new Error(`there is no such ${name} element in body`);
      }
      const errorName = `${name}Error`;
      this.elements[errorName] = selected;
    }
  }

  getElement(name: string) {
    if (!this.elements[name]) {
      throw new Error(`there is no such ${name} an element`);
    }

    return this.elements[name];
  }
}
//Form Selectors

export const formElements = new Elements();

formElements.addElement('.param__form', 'form');

formElements.addElement('button', 'button');
formElements.addElement('[data-age]', 'age', true);
formElements.addElement('[data-weight]', 'weight', true);
formElements.addElement('[data-height]', 'height', true);
formElements.addElement('[data-gender]', 'gender');
formElements.addElement('[data-activity]', 'activity');

//Scroller Selectors

export const resultsSection = new Elements();
resultsSection.addElement('[data-results-section]', 'results');

//CaloriesIntake Selectors

export const caloriesIntakeSection = new Elements();

caloriesIntakeSection.addElement(
  '[data-calories-perday]',
  'dailyIntake'
);
caloriesIntakeSection.addElement(
  '[data-calories-perweek]',
  'weeklyIntake'
);
caloriesIntakeSection.addElement('[data-best]', 'bestIntake');
caloriesIntakeSection.addElement('[data-base]', 'baseActivity');
caloriesIntakeSection.addElement('[data-low]', 'lowActivity');
caloriesIntakeSection.addElement(
  '[data-moderate]',
  'moderateActivity'
);
caloriesIntakeSection.addElement(
  '[data-high-moderate]',
  'highModerateActivity'
);

caloriesIntakeSection.addElement('[data-high]', 'highActivity');
caloriesIntakeSection.addElement('[data-vhigh]', 'vhighActivity');

//Macroingredients Selectors

export const macrosSectionElements = new Elements();

macrosSectionElements.addElement(
  '[data-maintenance]',
  'maintenanceButton'
);
macrosSectionElements.addElement('[data-cutting]', 'cuttingButton');
macrosSectionElements.addElement('[data-bulking]', 'bulkingButton');

macrosSectionElements.addElement(
  '[data-moderate-protein]',
  'moderateProteinVal'
);
macrosSectionElements.addElement(
  '[data-moderate-fats]',
  'moderateFatsVal'
);
macrosSectionElements.addElement(
  '[data-moderate-carbs]',
  'moderateCarbsVal'
);

macrosSectionElements.addElement(
  '[data-keto-protein]',
  'ketoProteinVal'
);
macrosSectionElements.addElement('[data-keto-fats]', 'ketoFatsVal');
macrosSectionElements.addElement('[data-keto-carbs]', 'ketoCarbsVal');

macrosSectionElements.addElement(
  '[data-highCarb-protein]',
  'highCarbProteinVal'
);
macrosSectionElements.addElement(
  '[data-highCarb-fats]',
  'highCarbFatsVal'
);
macrosSectionElements.addElement(
  '[data-highCarb-carbs]',
  'highCarbCarbsVal'
);

macrosSectionElements.addElement('[data-macro-text]', 'macrosText');

//ProperWeight selectors

export const hamwiValueInput = document.querySelectorAll(
  '.hamwi__number'
);
export const millerValueInput = document.querySelectorAll(
  '.miller__number'
);
export const devineValueInput = document.querySelector(
  '.devine__number'
);
export const robinsonValueInput = document.querySelector(
  '.robinson__number'
);

// BMI selectors

export const bmiSpan = document.querySelectorAll('.bmi__span');
export const bmiText = document.querySelector('.bmi__classified');
