const typeTabs = document.querySelectorAll('.tabs__item input[type="radio"]');
const typeLists = document.querySelectorAll(".tabs__content");

typeTabs.forEach((item) => {
  item.addEventListener("change", () => {
    if ((item.checked = true)) {
        typeLists.forEach((list) => {
        if (item.id === list.id) {
          list.classList.add("tabs__content_visible");
        } else if (list.classList.contains("tabs__content_visible")) {
          list.classList.remove("tabs__content_visible");
        }
      });
    }
  });
});