const tabs = document.querySelectorAll('input[type="radio"]');
const lists = document.querySelectorAll(".catalog__links-list");

tabs.forEach((item) => {
  item.addEventListener("change", () => {
    if ((item.checked = true)) {
      lists.forEach((list) => {
        if (item.id === list.id) {
          list.classList.add("catalog__links-list_visible");
        } else if (list.classList.contains("catalog__links-list_visible")) {
          list.classList.remove("catalog__links-list_visible");
        }
      });
    }
  });
});
