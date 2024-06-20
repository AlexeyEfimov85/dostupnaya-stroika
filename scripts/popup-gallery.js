const openGalleryPopupButtons = document.querySelectorAll(
  ".fancybox-carousel__image"
);

const popupGallery = document.querySelector("#popup-image");

openGalleryPopupButtons.forEach((openGalleryPopupButton) => {
  openGalleryPopupButton.addEventListener("click", () => {
    popupGallery.classList.add("popup_opened");
  });
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    popupGallery.classList.remove("popup_opened");
  }
});

popupGallery.addEventListener("mousedown", (evt) => {
  if (evt.target.classList.contains("popup")) {
    popupGallery.classList.remove("popup_opened");
  }
});
