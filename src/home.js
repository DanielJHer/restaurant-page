import { renderBtns, renderHomeHTML } from "./functions";

const renderHome = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  mainDiv.appendChild(renderBtns());

  // render html content
  mainDiv.appendChild(renderHomeHTML());
};

export default renderHome;
