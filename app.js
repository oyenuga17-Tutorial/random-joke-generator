const button = document.querySelector(".btn");
const joke = document.querySelector(".span");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const url = "https://dad-jokes.p.rapidapi.com/random/joke";

const buttonOnClick = () => {
  fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07886ec071msh01160e2b79b8b8cp1f116cjsn72a77418b44a",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      joke.textContent = data.body[0].setup;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

const searchButtonClick = (e) => {
  e.preventDefault();
  const value = input.value.toLowerCase();

  fetch(`https://dad-jokes.p.rapidapi.com/joke/search?term=${value}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07886ec071msh01160e2b79b8b8cp1f116cjsn72a77418b44a",
      "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      joke.textContent = data.body[0].setup;
    })
    .catch((err) => {
      console.log("error", err);
    });
};

button.addEventListener("click", buttonOnClick);
form.addEventListener("submit", searchButtonClick);
