const houseTabs = document.querySelectorAll('.house__tabs-item input[type="radio"]');
const houseLists = document.querySelectorAll(".house__price");

houseTabs.forEach((item) => {
  item.addEventListener("change", () => {
    if ((item.checked = true)) {
      houseLists.forEach((list) => {
        if (item.id === list.id) {
          list.classList.add("house__price_visible");
        } else if (list.classList.contains("house__price_visible")) {
          list.classList.remove("house__price_visible");
        }
      });
    }
  });
});
