const filtersBuilt = document.querySelector('.filters_built');
const toogleButton = document.querySelector('#filters-toogle');
const applyFiltersButton = document.querySelector("#apply-filters");
const showFiltersButtonBuilt = document.querySelector('.filters__button_built');
console.log(filtersBuilt)

showFiltersButtonBuilt.addEventListener('click', () => {
    filtersBuilt.classList.add('filters_opened')
    darkOverlay.classList.add("main__dropdown-bcgr_opened")
})

toogleButton.addEventListener('click', () => {
    filtersBuilt.classList.remove('filters_opened')
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
})

applyFiltersButton.addEventListener('click', () => {
    filtersBuilt.classList.remove('filters_opened')
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
})
