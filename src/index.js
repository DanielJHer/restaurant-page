import { renderBtns, renderHomeHTML } from "./functions";

const createPage = (() => {
  const mainDiv = document.querySelector("#content");

  mainDiv.appendChild(renderBtns());

  // render html content
  mainDiv.appendChild(renderHomeHTML());
})();
