import { renderBtns, renderMenuHTML } from "./functions";

const renderMenu = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  renderBtns();

  // render html content
  renderMenuHTML();
};

export default renderMenu;
