import { renderBtns, renderContactHTML } from "./functions";

const renderContact = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  mainDiv.appendChild(renderBtns());

  // render html content
  mainDiv.appendChild(renderContactHTML());
};

export default renderContact;
