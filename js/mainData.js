const mainData = () => {
  fetch(
    "https://my-new-test-html-academy-default-rtdb.firebaseio.com/anime.json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

mainData();
