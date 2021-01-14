//Navbar Selectors
export const burger = document.querySelector('.burger')!;
export const nav = document.querySelector('.navbar__list')!;
export const navLinks = document.querySelectorAll(
  '.navbar__item'
) as NodeListOf<HTMLElement>;

//Scroller Selectors

export const button = document.querySelector('[data-calc]');
export const resultsSection = document.querySelector('.results')!;

//ValidateForm Selectors

const form = <HTMLFormElement>document.querySelector('.param__form');
if (!form) {
  throw new Error('there is no such form');
}

export const genderInput = <HTMLInputElement>(
  form.querySelector('[data-gender]')
);

export const ageInput = <HTMLInputElement>form.querySelector('[data-age]');
export const weightInput = <HTMLInputElement>(
  form.querySelector('[data-weight]')
);
export const heightInput = <HTMLInputElement>(
  form.querySelector('[data-height]')
);
export const activityLevelInput = <HTMLInputElement>(
  form.querySelector('[data-activity ]')
);
export const ageError = <HTMLElement>form.querySelector('.age__input-error');
export const heightError = <HTMLElement>(
  form.querySelector('.height__input-error')
);
export const weightError = <HTMLElement>(
  form.querySelector('.weight__input-error')
);
export const dataStart = <HTMLElement>document.querySelector('[data-start]');
