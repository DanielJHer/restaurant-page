import renderBtns from "./functions";

const renderMenu = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  renderBtns();

  // render html content
  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "check out our amazing items";

  const img = document.createElement("img");
};

export default renderMenu;
