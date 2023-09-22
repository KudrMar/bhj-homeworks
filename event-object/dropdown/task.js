const elDropdown__value = document.querySelector(".dropdown__value");
const elDropdown__list = document.querySelector(".dropdown__list");

elDropdown__value.addEventListener("click", openContextMenu);

function openContextMenu() {
   elDropdown__list.classList.add("dropdown__list_active");
}

const elDropdown__item = document.querySelectorAll(".dropdown__item");

for (let i = 0; i < elDropdown__item.length; i++) {
   elDropdown__item[i].onclick = (el) => {
      elDropdown__list.classList.remove("dropdown__list_active");
      elDropdown__value.textContent = el.currentTarget.textContent;
      return false;
   }
}







