const checkbox = document.querySelector("#accordionCheckbox");

if (document.documentElement.clientWidth > 624) {
  accordionCheckbox.checked = true;
  accordionCheckbox.disabled = true;
} else {
  accordionCheckbox.checked = false;
}
