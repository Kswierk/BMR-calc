//Navbar Selectors
export const burger = document.querySelector('.burger');
export const nav = document.querySelector('.navbar__list');
export const navLinks = document.querySelectorAll('.navbar__item');
//Scroller Selectors
export const button = document.querySelector('[data-calc]');
export const resultsSection = document.querySelector('.results');
//ValidateForm Selectors
const form = document.querySelector('.param__form');
if (!form) {
    throw new Error('there is no such form');
}
export const genderInput = (form.querySelector('[data-gender]'));
export const ageInput = form.querySelector('[data-age]');
export const weightInput = (form.querySelector('[data-weight]'));
export const heightInput = (form.querySelector('[data-height]'));
export const activityLevelInput = (form.querySelector('[data-activity ]'));
export const ageError = form.querySelector('.age__input-error');
export const heightError = (form.querySelector('.height__input-error'));
export const weightError = (form.querySelector('.weight__input-error'));
export const dataStart = document.querySelector('[data-start]');
