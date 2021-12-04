function displayDemot() {
  fetch("quotes.json")
    .then((res) => res.json("content"))
    .then((data) => {
      let index = Math.floor(Math.random() * data.length);
      const content = data[index].quote;
      const author = data[index].author;
      const wishes = "";

      document.getElementById("quote").innerHTML = content;
      document.getElementById("author").innerHTML = author;
      //document.getElementById("wishes").innerHTML = wishes;
    })

    .catch((err) => {
      console.error(err);
    });
}

window.addEventListener("load", displayDemot, false);
