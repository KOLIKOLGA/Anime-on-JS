const modal = () => {
  const modal = document.querySelector(".search-model");
  const modalBtn = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".search-close-switch");
  const searchInput = modal.querySelector("#search-input");
  const wrapper = document.querySelector(".search-model-result");

  wrapper.style.width = "100%";
  wrapper.style.maxWidth = "500px";

  const debounce = (func, ms = 1000) => {
    console.log("parapapa");
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  };

  const searchDebounce = debounce((searchStr) => {
    searchFunc(searchStr);
  }, 1000); //функция обертка для дебаунс

  const renderFunc = (items) => {
    wrapper.innerHTML = "";
    items.forEach((item) => {
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `
      <a class="p-2" href="./anime-details.html">${item.title}</a>
      `
      );
    });
  };

  const searchFunc = (searchStr) => {
    fetch("https://my-new-project-anime-default-rtdb.firebaseio.com/anime.json")
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.filter((dataItem) => {
          return (
            dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) ||
            dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
          );
        });

        renderFunc(filterData.slice(0, 5));
      });
  };

  modalBtn.addEventListener("click", () => {
    modal.classList.add("active");

    // modal.style.display = "block";
  });

  modalClose.addEventListener("click", () => {
    modal.classList.remove("active");
    wrapper.innerHTML = "";

    //modal.style.display = "none";
  });
  searchInput.addEventListener("input", (event) => {
    searchDebounce(event.target.value);
  });
};

modal();
