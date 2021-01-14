const scrollToSection = (section: HTMLElement | Element, fn: () => void) => {
  setTimeout(() => {
    fn();
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 300);
};
export default scrollToSection;
