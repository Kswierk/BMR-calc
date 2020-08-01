class Scroller {
    constructor(rootSelector) {
        this.rootElement = document.querySelector(rootSelector);
        this.btn = document.querySelector('[data-calc]');
    }

    initializeScroller() {
        this.addListener();
    }

    addListener() {
        this.btn.addEventListener('click', () => {
            setTimeout(() => {
                this.showResults();
                this.scrollToSection();
            }, 300);
        });
    }

    scrollToSection() {
        this.rootElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }



    showResults() {
        this.ageInput = document.querySelector('[data-age]');
        this.weightInput = document.querySelector('[data-weight]');
        this.heightInput = document.querySelector('[data-height]');
        this.resultsSection = document.querySelector('.results');

        this.badValues = calc.weight.value > 200 || calc.weight.value < 30 || calc.age.value > 100 || calc.age.value < 10 || calc.height.value > 250 || calc.height.value < 100;

        this.emptyValues = calc.weight.value === "" || calc.height.value === "" || calc.age.value === "";

        if (this.badValues) {
            return this.ageInput.style.border = '1px solid red',
                this.ageInput.setAttribute('placeholder', 'wpisz dane'),
                this.weightInput.style.border = '1px solid red',
                this.weightInput.setAttribute('placeholder', 'wpisz dane'),
                this.heightInput.style.border = '1px solid red',
                this.heightInput.setAttribute('placeholder', 'wpisz dane'),

                this.hideResults();
        }

        this.resultsSection.classList.add('show-results');

        this.ageInput.style.border = "1px solid black";
        this.weightInput.style.border = "1px solid black";
        this.heightInput.style.border = "1px solid black";


    }


    hideResults() {
        this.resultsSection.classList.remove('show-results');
    }
}

const scroller = new Scroller('[data-results]');

scroller.initializeScroller();