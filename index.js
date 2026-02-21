const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value.trim();
  const lastName = document.querySelector(".lastname").value.trim();
  const phone = document.querySelector(".telephone").value.trim();

  if (name === "" || lastName === "" || phone === "") {
    alert("Заполните все поля");
    return;
  }
  let data = new Date();

  const tb = document.querySelector(".table");

  const row = document.createElement("tr");

  const nc = document.createElement("td");
  nc.textContent = name;

  const lastC = document.createElement("td");
  lastC.textContent = lastName;

  const phoneC = document.createElement("td");
  phoneC.textContent = phone;

  const d = document.createElement("td");

  d.textContent = `Дата создания:  ${data.getDate()}.${data.getMonth() + 1}.${data.getFullYear()} `;

  row.appendChild(nc);
  row.appendChild(lastC);
  row.appendChild(phoneC);
  row.appendChild(d);

  tb.appendChild(row);

  document.querySelector(".name").value = "";
  document.querySelector(".lastname").value = "";
  document.querySelector(".telephone").value = "";
});

const form2 = document.querySelector(".form2");

form2.addEventListener("submit", (e) => {
  e.preventDefault();
  const exercise = document.querySelector(".exercise").value;
  const exercise2 = document.querySelector(".exercise2").value.trim();

  if (exercise === "" || exercise2 === "") {
    alert("Заполните все поля");
    return;
  }
  let date = new Date();
  let wr = document.querySelector(".exercise-wr");

  let block = document.createElement("div");
  block.classList.add("exercise-block");

  let title = document.createElement("h4");
  title.textContent = `Задание: ${exercise}`;
  title.classList.add("exercis");

  let text = document.createElement("p");
  text.textContent = `Описание: ${exercise2}`;
  text.classList.add("exercise-text");
  let dateS = document.createElement("p");
  dateS.textContent = `Дата создания: ${date.getDate()} . ${date.getMonth() + 1} . ${date.getFullYear()}`;

  block.appendChild(title);
  block.appendChild(text);
  block.appendChild(dateS);
  wr.appendChild(block);

  document.querySelector(".exercise").value = "";
  document.querySelector(".exercise2").value = "";
});

let bar = document.querySelector("#open");
let burger = document.querySelector("#open-menu");
burger.addEventListener("click", () => {
  bar.classList.toggle("active");
});
