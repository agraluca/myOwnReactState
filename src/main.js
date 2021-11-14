import { useState } from "./hooks/index.js";
import { fetcher } from "./services/index.js";

const [counter, setCounter] = useState(0);
const [user, setUser] = useState("");

const container = document.querySelector(".container");
const title = document.querySelector(".title");
const plusButton = document.querySelector(".plusButton");
const minusButton = document.querySelector(".minusButton");

const increment = () => {
  setCounter(counter() + 1);
};

const decrement = () => {
  setCounter(counter() - 1);
};

const getUser = async () => {
  const { users } = await fetcher({
    url: "users",
  });
  setUser(`${users[0].first_name} ${users[0].last_name}`);
};
await getUser();
console.log("users", user());

plusButton.addEventListener("click", increment);
minusButton.addEventListener("click", decrement);

export function render() {
  title.innerText = `Olá, ${user()}. Seja bem-vindo!`;
  const p = document.querySelector(".paragraph");
  if (p) {
    p.innerText = counter();
  } else {
    const p = document.createElement("p");
    p.setAttribute("class", "paragraph");
    p.innerText = counter();
    container.appendChild(p);
  }
}

render();
