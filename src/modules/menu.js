const renderMenu = () => {
  // render html content
  mainDiv.innerHTML = "";
  const menuDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "check out our amazing items";

  const img = document.createElement("img");

  menuDiv.appendChild(headline);
  menuDiv.appendChild(paragraph);
  menuDiv.appendChild(img);

  mainDiv.appendChild(menuDiv);
};

export default renderMenu;
