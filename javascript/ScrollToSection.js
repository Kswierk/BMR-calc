const scrollToSection = (section, fn) => {
    setTimeout(() => {
        fn();
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }, 300);
};
export default scrollToSection;
