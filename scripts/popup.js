const form = document.querySelector("#popup-form");
const popup = document.querySelector(".popup");
const openPopupButtons = document.querySelectorAll(".button__request-call");
const registerButton = document.querySelector("button[name=popup-send-form]");
const toggleButtons = document.querySelectorAll(".popup__toggle");
const popupOk = document.querySelector("#popup-ok");
const buttonOk = document.querySelector("#button-ok");
const openExcursionPopupButton = document.querySelector(".button__request-excursion");
const popupCallImgs = document.querySelectorAll("#call");
const popupExcursionImgs = document.querySelectorAll("#excursion")

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

if(openExcursionPopupButton){
openExcursionPopupButton.addEventListener("click", () => {
    popup.classList.add("popup_opened");
    popupExcursionImgs.forEach((popupExcursionImg) => {
        popupExcursionImg.classList.add("popup__image_opened");
    })
    popupCallImgs.forEach((popupCallimg) => {
        popupCallimg.classList.remove("popup__image_opened");
    })
  });
}
openPopupButtons.forEach((openPopupButton) => {
  openPopupButton.addEventListener("click", () => {
    popup.classList.add("popup_opened");
    popupCallImgs.forEach((popupCallimg) => {
        popupCallimg.classList.add("popup__image_opened");
    })
    popupExcursionImgs.forEach((popupExcursionImg) => {
        popupExcursionImg.classList.remove("popup__image_opened");
    })
  });
});

toggleButtons.forEach((toggleButton) => {
  toggleButton.addEventListener("click", () => {
    popup.classList.remove("popup_opened");
    popupOk.classList.remove("popup_opened");
  });
});

registerButton.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
  popupOk.classList.add("popup_opened");
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    popup.classList.remove("popup_opened");
  }
});

popup.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup")) {
    popup.classList.remove("popup_opened");
  }
});

buttonOk.addEventListener("click", () => {
  popupOk.classList.remove("popup_opened");
});
