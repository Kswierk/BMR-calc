import * as UiSelectors from './UiSelectors.js';

const Navbar = () => {
  UiSelectors.burger.addEventListener('click', () => {
    UiSelectors.nav.classList.toggle('navbar__list--active');

    // navbar slide

    UiSelectors.navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7}s`;
      }
    });

    // burger animation
    UiSelectors.burger.classList.toggle('toggle');
  });
};

// navSlide();
export default Navbar;
