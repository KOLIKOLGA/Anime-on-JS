const bgElements = () => {
  const elements = document.querySelectorAll(".set-bg");
  //console.log(elements);

  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`; //буз использ переменной src
  });
};

bgElements();
