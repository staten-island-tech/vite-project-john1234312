import "../styles/styles.css"
import { mangaList } from "./mangaArray";
import { DOM } from "./DOM";

const filterManga = function () {
  mangaList
  .forEach((manga) => manga.genre.includes("Action"))
  .forEach((manga) => {
    DOM.mangaSpace.insertAdjacentHTML("beforeend", manga);
  });
   addManga()
};
filterManga()