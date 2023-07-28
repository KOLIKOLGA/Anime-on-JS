const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalBtn = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".search-close-switch");

  modalBtn.addEventListener("click", () => {
    modal.classList.add("active")
   // modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active")
    //modal.style.display = "none";
  });
};

modal();
