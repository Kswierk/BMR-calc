//Navbar Selectors
export const burger = document.querySelector('.burger')!;
export const nav = document.querySelector('.navbar__list')!;
export const navLinks = document.querySelectorAll(
  '.navbar__item'
) as NodeListOf<HTMLElement>;

//jak otypowac elements
class Elements {
  elements: any;
  constructor() {
    this.elements = {
      // string name: HTMLElement
    };
  }

  addElement(query: string, name: string, withErrorInput = false) {
    const selected = document.querySelector(query);

    if (!selected) {
      throw new Error('there is no such an element in body');
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

export const formElements = new Elements();

formElements.addElement('.param__form', 'form');

formElements.addElement('button', 'button');
formElements.addElement('[data-age]', 'age', true);
formElements.addElement('[data-weight]', 'weight', true);
formElements.addElement('[data-height]', 'height', true);
formElements.addElement('[data-gender]', 'gender');
formElements.addElement('[data-activity]', 'activity');

console.log(formElements);

//Scroller Selectors

export const resultsSection = new Elements();
resultsSection.addElement('[data-results-section]', 'results');
