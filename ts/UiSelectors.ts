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

export const genderInput = <HTMLInputElement>(
  document.querySelector('[data-gender]')
);
export const ageInput = <HTMLInputElement>document.querySelector('[data-age]');
export const weightInput = <HTMLInputElement>(
  document.querySelector('[data-weight]')
);
export const heightInput = <HTMLInputElement>(
  document.querySelector('[data-height]')
);
export const activityLevelInput = <HTMLInputElement>(
  document.querySelector('[data-activity ]')
);
export const ageError = <HTMLElement>(
  document.querySelector('.age__input-error')
);
export const heightError = <HTMLElement>(
  document.querySelector('.height__input-error')
);
export const weightError = <HTMLElement>(
  document.querySelector('.weight__input-error')
);
export const dataStart = <HTMLElement>document.querySelector('[data-start]');
