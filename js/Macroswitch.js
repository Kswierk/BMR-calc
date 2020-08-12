class Macroswitch {
    constructor() {
        this.dietType = null;

        this.maintenance = document.querySelector('[data-maintenance]');
        this.cut = document.querySelector('[data-cutting]');
        this.bulk = document.querySelector('[data-bulking]');

        this.moderateProtein = document.querySelector('[data-moderate-protein]');
        this.moderateFats = document.querySelector('[data-moderate-fats]');
        this.moderateCarbs = document.querySelector('[data-moderate-carbs]');
        this.ketoProtein = document.querySelector('[data-keto-protein]');
        this.ketoFats = document.querySelector('[data-keto-fats]');
        this.ketoCarbs = document.querySelector('[data-keto-carbs]');
        this.highProtein = document.querySelector('[data-highcarb-protein]');
        this.highFats = document.querySelector('[data-highcarb-fats]');
        this.highCarbs = document.querySelector('[data-highcarb-carbs]');
        this.caloriesValue = document.querySelector('.calories-number__perday');
        this.macroText = document.querySelector('.macro__text');;
    }

    initSwtch() {
        this.maintenanceMacros();
        this.macroListeners();
    }

    maintenanceMacros() {

        this.macroText.innerHTML = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${this.caloriesValue.innerHTML} kalorii</strong> dziennie.`;

        this.moderateProteinIntake = Math.floor(this.caloriesValue.innerHTML * 0.25 / 4);
        this.moderateFatIntake = Math.floor(this.caloriesValue.innerHTML * 0.4 / 9);
        this.moderateCarbIntake = Math.floor(this.caloriesValue.innerHTML * 0.35 / 4);

        this.ketoProteinIntake = Math.floor(this.caloriesValue.innerHTML * 0.2 / 4);
        this.ketoFatIntake = Math.floor(this.caloriesValue.innerHTML * 0.75 / 9);
        this.ketoCarbIntake = Math.floor(this.caloriesValue.innerHTML * 0.05 / 4);

        this.highProteinIntake = Math.floor(this.caloriesValue.innerHTML * 0.3 / 4);
        this.highFatIntake = Math.floor(this.caloriesValue.innerHTML * 0.2 / 9);
        this.highCarbIntake = Math.floor(this.caloriesValue.innerHTML * 0.5 / 4);

        this.moderateProtein.innerHTML = this.moderateProteinIntake;
        this.moderateFats.innerHTML = this.moderateFatIntake;
        this.moderateCarbs.innerHTML = this.moderateCarbIntake;

        this.ketoProtein.innerHTML = this.ketoProteinIntake;
        this.ketoFats.innerHTML = this.ketoFatIntake;
        this.ketoCarbs.innerHTML = this.ketoCarbIntake;

        this.highProtein.innerHTML = this.highProteinIntake;
        this.highFats.innerHTML = this.highFatIntake;
        this.highCarbs.innerHTML = this.highCarbIntake;

        this.dietType = 'maintenance';
    }

    cutMacros() {
        this.macroText.innerHTML = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${Math.floor(this.caloriesValue.innerHTML * 0.85)} kalorii</strong> dzienie, co oznacza 15% deficyt kaloryczny od Twojego dziennego zapotrzebowania.`;

        this.moderateProteinIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.25 / 4);
        this.moderateFatIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.4 / 9);
        this.moderateCarbIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.35 / 4);

        this.ketoProteinIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.2 / 4);
        this.ketoFatIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.75 / 9);
        this.ketoCarbIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.05 / 4);

        this.highProteinIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.3 / 4);
        this.highFatIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.3 / 9);
        this.highCarbIntake = Math.floor((this.caloriesValue.innerHTML * 0.85) * 0.5 / 4);

        this.moderateProtein.innerHTML = this.moderateProteinIntake;
        this.moderateFats.innerHTML = this.moderateFatIntake;
        this.moderateCarbs.innerHTML = this.moderateCarbIntake;

        this.ketoProtein.innerHTML = this.ketoProteinIntake;
        this.ketoFats.innerHTML = this.ketoFatIntake;
        this.ketoCarbs.innerHTML = this.ketoCarbIntake;

        this.highProtein.innerHTML = this.highProteinIntake;
        this.highFats.innerHTML = this.highFatIntake;
        this.highCarbs.innerHTML = this.highCarbIntake;

        this.dietType = 'cut'
    }

    bulkMacros() {

        this.macroText.innerHTML = `Poniższy rozkład makroskładników odpowiada zapotrzebowaniu na <strong>${Math.floor(this.caloriesValue.innerHTML * 1.15)} kalorii</strong> dzienie, co oznacza 15% surplus kaloryczny do Twojego dziennego zapotrzebowania.`;

        this.moderateProteinIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.25 / 4);
        this.moderateFatIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.4 / 9);
        this.moderateCarbIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.35 / 4);

        this.ketoProteinIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.2 / 4);
        this.ketoFatIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.75 / 9);
        this.ketoCarbIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.05 / 4);

        this.highProteinIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.3 / 4);
        this.highFatIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.3 / 9);
        this.highCarbIntake = Math.floor((this.caloriesValue.innerHTML * 1.15) * 0.5 / 4);

        this.moderateProtein.innerHTML = this.moderateProteinIntake;
        this.moderateFats.innerHTML = this.moderateFatIntake;
        this.moderateCarbs.innerHTML = this.moderateCarbIntake;

        this.ketoProtein.innerHTML = this.ketoProteinIntake;
        this.ketoFats.innerHTML = this.ketoFatIntake;
        this.ketoCarbs.innerHTML = this.ketoCarbIntake;

        this.highProtein.innerHTML = this.highProteinIntake;
        this.highFats.innerHTML = this.highFatIntake;
        this.highCarbs.innerHTML = this.highCarbIntake;

        this.dietType = 'bulk'
    }

    macroListeners() {
        this.cut.addEventListener('click', () => this.cutMacros());
        this.bulk.addEventListener('click', () => this.bulkMacros());
        this.maintenance.addEventListener('click', () => this.maintenanceMacros());

    }
}

const macroswitch = new Macroswitch;

macroswitch.initSwtch();