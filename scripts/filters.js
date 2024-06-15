const showFiltersButton = document.querySelector('.filters__button');
const filters = document.querySelector('.filters');
const toogleButton = document.querySelector('#filters-toogle');
const applyFiltersButton = document.querySelector("#apply-filters");


showFiltersButton.addEventListener('click', () => {
    filters.classList.add('filters_opened')
    darkOverlay.classList.add("main__dropdown-bcgr_opened")
})

toogleButton.addEventListener('click', () => {
    filters.classList.remove('filters_opened')
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
})

applyFiltersButton.addEventListener('click', () => {
    filters.classList.remove('filters_opened')
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
})


