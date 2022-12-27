import "../styles/style.css";
import { mangaList } from "./mangaArray";
import { DOM } from "./DOM";

function clearField() {
  DOM.mangaSpace.innerHTML = "";
}

DOM.actionBtn.addEventListener("click", function filterByAction() {
  clearField();
  mangaList
    .filter((manga) => manga.genre.includes("Action"))
    .forEach((manga) =>
      DOM.mangaSpace.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <h2>${manga.name} <br> </>
      <img src=${manga.cover} class="image">
      <p> Released on ${manga.dateReleased}</p>
    </div>`
      )
    );
});

DOM.adventureBtn.addEventListener("click", function filterByAdventure() {
  clearField();
  mangaList
    .filter((manga) => manga.genre.includes("Adventure"))
    .forEach((manga) =>
      DOM.mangaSpace.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
      <h2>${manga.name} <br> </>
      <img src=${manga.cover} class="image">
      <p> Released on ${manga.dateReleased}</p>
    </div>`
      )
    );
});

DOM.psychThrBtn.addEventListener(
  "click",
  function filterByPsychologicalThriller() {
    clearField();
    mangaList
      .filter((manga) => manga.genre.includes("Psychological Thriller"))
      .forEach((manga) =>
        DOM.mangaSpace.insertAdjacentHTML(
          "beforeend",
          `<div class="card">
      <h2>${manga.name} <br> </>
      <img src=${manga.cover} class="image">
      <p> Released on ${manga.dateReleased}</p>
    </div>`
        )
      );
  }
);

DOM.themeBtn.addEventListener("click", function changeTheme() {
  if (document.body.classList.contains("calm")) {
    document.body.classList.add("excited"),
    document.body.classList.remove("calm")
  } else {
    document.body.classList.add("calm"),
    document.body.classList.remove("excited")
  }
} )
