//Navbar Selectors
export const burger = document.querySelector('.burger');
export const nav = document.querySelector('.navbar__list');
export const navLinks = document.querySelectorAll('.navbar__item');
class FormElements {
    constructor() {
        this.elements = {
        // string name: HTMLElement
        };
    }
    addElement(query, name) {
        this.elements[name] = document.querySelector(query);
    }
    getElement(name) {
        return this.elements[name];
    }
}
export const formStructure = new FormElements();
formStructure.addElement('[data-calc]', 'button');
formStructure.addElement('[data-age]', 'age');
formStructure.addElement('[data-weight]', 'weight');
formStructure.addElement('[data-height]', 'height');
formStructure.addElement('[data-gender]', 'gender');
formStructure.addElement('[data-height]', 'height');
formStructure.addElement('[data-activity]', 'activity');
export const btn = formStructure.getElement('button');
export const age = formStructure.getElement('age');
export const weight = formStructure.getElement('weight');
export const height = formStructure.getElement('height');
export const gender = formStructure.getElement('gender');
export const activity = formStructure.getElement('activity');
//Scroller Selectors
export const button = document.querySelector('[data-calc]');
export const resultsSection = document.querySelector('.results');
//ValidateForm Selectors
export const form = (document.querySelector('.param__form'));
if (!form) {
    throw new Error('there is no such form');
}
// console.log(
//   Array.from(form).reduce(
//     (acc, input) => ({ ...acc, [input.className]: input.nodeValue }),
//     {}
//   )
// );
//w jaki sposob wyciagnac inputy z formularza
export const genderInput = (form.querySelector('[data-gender]'));
export const ageInput = (form.querySelector('[data-age]'));
export const weightInput = (form.querySelector('[data-weight]'));
export const heightInput = (form.querySelector('[data-height]'));
export const activityLevelInput = (form.querySelector('[data-activity ]'));
export const ageError = (form.querySelector('.age__input-error'));
export const heightError = (form.querySelector('.height__input-error'));
export const weightError = (form.querySelector('.weight__input-error'));
export const dataStart = (document.querySelector('[data-start]'));
