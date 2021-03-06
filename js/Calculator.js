class Calculator {
  constructor() {
    this.gender = null;
    this.age = null;
    this.weight = null;
    this.height = null;
    this.activityLevel = null;

    this.uiSelectors = {
      gender: "[data-gender]",
      age: "[data-age]",
      weight: "[data-weight]",
      height: "[data-height]",
      activity: "[data-activity ]",
      calcBtn: "[data-calc]",
      resultsSection: "[data-results]",
    };
  }

  initializeCalculator() {
    this.gender = document.querySelector(this.uiSelectors.gender);
    this.age = document.querySelector(this.uiSelectors.age);
    this.weight = document.querySelector(this.uiSelectors.weight);
    this.height = document.querySelector(this.uiSelectors.height);
    this.activityLevel = document.querySelector(this.uiSelectors.activity);
    this.calcBtn = document.querySelector(this.uiSelectors.calcBtn);
    this.results = document.querySelector(this.uiSelectors.resultsSection);

    this.addListeners();
  }

  addListeners() {
    this.calcBtn.addEventListener("click", () => {
      this.caloriesIntake();
      this.properWeight();
      this.bmiRate();
      macroswitch.initSwtch();
      this.caloriesBold();
    });
  }

  caloriesIntake() {
    this.dailyIntake = document.querySelector(".calories-number__perday");
    this.weeklyIntake = document.querySelector(".calories-number__perweek");
    this.bestCalories = document.querySelector(".stats__calories");
    this.noneCaloriesRate = document.querySelector(".base__span");
    this.lowCaloriesRate = document.querySelector(".low__span");
    this.moderateCaloriesRate = document.querySelector(".moderate__span");
    this.highModerateCaloriesRate = document.querySelector(
      ".high-moderate__span"
    );
    this.highCaloriesRate = document.querySelector(".high__span");
    this.vhighCaloriesRate = document.querySelector(".vhigh__span");

    this.mensBase = Math.floor(
      66.5 +
        13.7 * this.weight.value +
        5 * this.height.value -
        6.8 * this.age.value
    );

    this.womensBase = Math.floor(
      655 +
        9.6 * this.weight.value +
        1.85 * this.height.value -
        4.7 * this.age.value
    );

    this.mensIntake = this.mensBase * this.activityLevel.value;

    this.womensIntake = this.womensBase * this.activityLevel.value;

    if (this.gender.value === "male") {
      this.dailyIntake.innerHTML = Math.floor(this.mensIntake);
      this.weeklyIntake.innerHTML = Math.floor(this.mensIntake * 7);
      this.bestCalories.innerHTML = `${Math.floor(this.mensIntake)} kalorii`;
      this.noneCaloriesRate.innerHTML = this.mensBase;
      this.lowCaloriesRate.innerHTML = Math.floor(this.mensBase * 1.2);
      this.moderateCaloriesRate.innerHTML = Math.floor(this.mensBase * 1.375);
      this.highModerateCaloriesRate.innerHTML = Math.floor(
        this.mensBase * 1.55
      );
      this.highCaloriesRate.innerHTML = Math.floor(this.mensBase * 1.725);
      this.vhighCaloriesRate.innerHTML = Math.floor(this.mensBase * 1.9);
    } else {
      this.dailyIntake.innerHTML = Math.floor(this.womensIntake);
      this.weeklyIntake.innerHTML = Math.floor(this.womensIntake * 7);
      this.bestCalories.innerHTML = Math.floor(this.womensIntake);
      this.noneCaloriesRate.innerHTML = this.womensBase;
      this.lowCaloriesRate.innerHTML = Math.floor(this.womensBase * 1.2);
      this.moderateCaloriesRate.innerHTML = Math.floor(this.womensBase * 1.375);
      this.highModerateCaloriesRate.innerHTML = Math.floor(
        this.womensBase * 1.55
      );
      this.highCaloriesRate.innerHTML = Math.floor(this.womensBase * 1.725);
      this.vhighCaloriesRate.innerHTML = Math.floor(this.womensBase * 1.9);
    }
  }

  properWeight() {
    this.hamwiFormulaMen = `${Math.floor(
      48 + 2.7 * (this.height.value / 2.54 - 60)
    )}kg`;
    this.hamwiFormulaWomen = `${Math.floor(
      45.5 + 2.2 * (this.height.value / 2.54 - 60)
    )}kg`;

    this.devineFormulaMen = `${Math.floor(
      50 + 2.3 * (this.height.value / 2.54 - 60)
    )}kg`;
    this.devineFormulaWomen = `${Math.floor(
      45.5 + 2.3 * (this.height.value / 2.54 - 60)
    )}kg`;

    this.robinsonFormulaMen = `${Math.floor(
      52 + 1.9 * (this.height.value / 2.54 - 60)
    )}kg`;
    this.robinsonFormulaWomen = `${Math.floor(
      49 + 1.9 * (this.height.value / 2.54 - 60)
    )}kg`;

    this.millerFormulaMen = `${Math.floor(
      56.2 + 1.41 * (this.height.value / 2.54 - 60)
    )}kg`;
    this.millerFormulaWomen = `${Math.floor(
      53.1 + 1.36 * (this.height.value / 2.54 - 60)
    )}kg`;

    this.hamwiFormula = document.querySelectorAll(".hamwi__number");
    this.devineFormula = document.querySelector(".devine__number");
    this.robinsonFormula = document.querySelector(".robinson__number");
    this.millerFormula = document.querySelectorAll(".miller__number");

    if (this.gender.value === "male") {
      this.hamwiFormula.forEach(
        (element) => (element.innerHTML = this.hamwiFormulaMen)
      );
      this.robinsonFormula.innerHTML = this.robinsonFormulaMen;
      this.devineFormula.innerHTML = this.devineFormulaMen;
      this.millerFormula.forEach(
        (element) => (element.innerHTML = this.millerFormulaMen)
      );
    } else {
      this.hamwiFormula.forEach(
        (element) => (element.innerHTML = this.hamwiFormulaWomen)
      );
      this.robinsonFormula.innerHTML = this.robinsonFormulaWomen;
      this.devineFormula.innerHTML = this.devineFormulaWomen;
      this.millerFormula.forEach(
        (element) => (element.innerHTML = this.millerFormulaWomen)
      );
    }
  }

  bmiRate() {
    this.bmiSpan = document.querySelectorAll(".bmi__span");
    this.bmi__classified = document.querySelector(".bmi__classified");

    const power = Math.pow(this.height.value / 100, 2);

    this.bmi = Math.round(this.weight.value / power);

    this.bmiSpan.forEach((element) => {
      element.innerHTML = this.bmi;
    });

    if (this.bmi < 18.5) {
      this.bmi__classified.innerHTML = "niedowagę";
    } else if ((this.bmi > 18.5, this.bmi <= 24.99)) {
      this.bmi__classified.innerHTML = "prawidłową wagę";
    } else if ((this.bmi > 25, this.bmi <= 29.99)) {
      this.bmi__classified.innerHTML = "nadwagę";
    } else {
      this.bmi__classified.innerHTML = "otyłość";
    }
  }

  caloriesBold() {
    this.base = document.querySelector(".base__calories-rate");
    this.low = document.querySelector(".low__calories-rate");
    this.moderate = document.querySelector(".moderate__calories-rate");
    this.highModerate = document.querySelector(".high-moderate__calories-rate");
    this.high = document.querySelector(".high__calories-rate");
    this.vhigh = document.querySelector(".vhigh__calories-rate");

    this.boldRemove();

    if (this.activityLevel.value === "1")
      this.base.classList.add("active__bold");
    else if (this.activityLevel.value === "1.2")
      this.low.classList.add("active__bold");
    else if (this.activityLevel.value === "1.375")
      this.moderate.classList.add("active__bold");
    else if (this.activityLevel.value === "1.55")
      this.highModerate.classList.add("active__bold");
    else if (this.activityLevel.value === "1.725")
      this.high.classList.add("active__bold");
    else if (this.activityLevel.value === "1.9")
      this.vhigh.classList.add("active__bold");
  }

  boldRemove() {
    this.base.classList.remove("active__bold");
    this.low.classList.remove("active__bold");
    this.moderate.classList.remove("active__bold");
    this.highModerate.classList.remove("active__bold");
    this.high.classList.remove("active__bold");
    this.vhigh.classList.remove("active__bold");
  }
}

const calc = new Calculator();

calc.initializeCalculator();
