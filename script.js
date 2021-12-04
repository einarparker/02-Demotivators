function displayQuote() {
  fetch("jokes.json")
    .then((res) => res.json("content"))
    .then((data) => {
      let index = Math.floor(Math.random() * data.length);
      const content = data[index].joke_text;
      const punchLine = data[index].joke_punchline;
      const wishes = "";

      document.getElementById("quotation").innerHTML = content;
      document.getElementById("punchLine").innerHTML = punchLine;
      //document.getElementById("wishes").innerHTML = wishes;
    })

    .catch((err) => {
      console.error(err);
    });
}

window.addEventListener("load", displayQuote, false);
