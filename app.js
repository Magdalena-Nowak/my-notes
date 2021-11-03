const addBtn = document.querySelector(".add");
const deleteAllBtn = document.querySelector(".delete-all");
const alertText = document.querySelector(".badge-warning");
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const cardsContainer = document.querySelector(".cards");
const deleteCardBtns = document.getElementsByClassName("card__delete-btn");
const panelContainer = document.querySelector(".panel-container");
const options = document.querySelectorAll("option");
let number = 0;
const createNote = (note, option, optionNr) => {
  const card = document.createElement("div");
  card.classList.add(
    "card",
    "col-11",
    "col-md-5",
    "col-lg-3",
    "col-xl-2",
    "m-2"
  );
  card.setAttribute("id", optionNr);
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.innerHTML = `<h5 class="card-title my-2">${option.textContent} #${optionNr}</h5>
  <button class="card__delete-btn btn btn-dark">
  <i class="fas fa-times icon"></i>
  </button>
  <p class="card-text my-3">${note}</p>`;
  if (option.value === "1") {
    card.style.backgroundColor = "#cddafd";
  } else if (option.value === "2") {
    card.style.backgroundColor = "#bee1e6";
  } else if (option.value === "3") {
    card.style.backgroundColor = "#fad2e1";
  }
  card.append(cardBody);
  cardsContainer.append(card);
};

const clearPanel = () => {
  const input = document.querySelector(".input-text");
  input.value = "";
  alertText.style.visibility = "hidden";
  panelContainer.classList.remove("active");
};

const saveNote = () => {
  const noteTxt = document.querySelector(".input-text").value;
  if (noteTxt !== "") {
    number++;
    options.forEach((option) => {
      if (option.selected === true && option.value === "0") {
        alertText.style.visibility = "visible";
      } else {
        if (option.selected && option.value === "1") {
          createNote(noteTxt, option, number);
        } else if (option.selected && option.value === "2") {
          createNote(noteTxt, option, number);
        } else if (option.selected && option.value === "3") {
          createNote(noteTxt, option, number);
        }
        clearPanel();
      }
    });
  } else {
    alertText.style.visibility = "visible";
  }
};

saveBtn.addEventListener("click", saveNote);
addBtn.addEventListener("click", () => {
  panelContainer.classList.add("active");
  const select = document.querySelector("select");
  select.selectedIndex = 0;
});

cancelBtn.addEventListener("click", () => {
  clearPanel();
  const select = document.querySelector("select");
  select.selectedIndex = 0;
});

deleteAllBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    cardsContainer.removeChild(card);
  });
});

const searchElement = (idNr) => {
  const cardToDelete = document.getElementById(idNr);
  cardsContainer.remove(cardToDelete);
};
