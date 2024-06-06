const catalogBtn = document.querySelector(".navigation__item_catalog");
const catalogMenu = document.querySelector(".dropdown-menu");
const aboutBtn = document.querySelector(".navigation__item_about");
const aboutMenu = document.querySelector(".dropdown-about");
const darkOverlay = document.querySelector(".main__dropdown-bcgr");
const burgerBtn = document.querySelector("#burgerButton");
const navContainer = document.querySelector('.navigation__container');


catalogBtn.addEventListener("click", () => {
  if (catalogMenu.classList.contains("dropdown-menu_closed")) {
    aboutMenu.classList.add("dropdown-menu_closed");
    aboutMenu.classList.remove("dropdown-menu_opened");
    catalogMenu.classList.remove("dropdown-menu_closed");
    catalogMenu.classList.add("dropdown-menu_opened");
  } else {
    catalogMenu.classList.add("dropdown-menu_closed");
    catalogMenu.classList.remove("dropdown-menu_opened");
  }

  if (
    aboutMenu.classList.contains("dropdown-menu_opened") ||
    catalogMenu.classList.contains("dropdown-menu_opened")
  ) {
    darkOverlay.classList.add("main__dropdown-bcgr_opened");
  } else {
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
  }
});

aboutBtn.addEventListener("click", () => {
  if (aboutMenu.classList.contains("dropdown-menu_closed")) {
    catalogMenu.classList.add("dropdown-menu_closed");
    catalogMenu.classList.remove("dropdown-menu_opened");
    aboutMenu.classList.remove("dropdown-menu_closed");
    aboutMenu.classList.add("dropdown-menu_opened");
    navContainer.classList.remove("navigation__container_opened")
  } else {
    aboutMenu.classList.add("dropdown-menu_closed");
    aboutMenu.classList.remove("dropdown-menu_opened");
  }

  if (
    aboutMenu.classList.contains("dropdown-menu_opened") ||
    catalogMenu.classList.contains("dropdown-menu_opened")
  ) {
    darkOverlay.classList.add("main__dropdown-bcgr_opened");
  } else {
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
  }
});


burgerBtn.addEventListener('change', () => {
  if (burgerBtn.checked) {
    navContainer.classList.add("navigation__container_opened")
  } else {
    navContainer.classList.remove("navigation__container_opened");
    darkOverlay.classList.remove("main__dropdown-bcgr_opened");
    aboutMenu.classList.remove("dropdown-menu_opened");
    aboutMenu.classList.add("dropdown-menu_closed");
    catalogMenu.classList.add("dropdown-menu_closed");
    catalogMenu.classList.remove("dropdown-menu_opened");
  }
})