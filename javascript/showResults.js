import * as UiSelectors from './UiSelectors.js';
const showResults = () => {
    UiSelectors.button?.addEventListener('click', () => {
        UiSelectors.resultsSection.classList.add('show-results');
    });
};
export default showResults;
