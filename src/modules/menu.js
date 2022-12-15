const renderMenu = () => {
  // render html content
  infoDiv.innerHTML = "";

  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "check out our amazing items";

  const img = document.createElement("img");

  infoDiv.appendChild(headline);
  infoDiv.appendChild(paragraph);
  infoDiv.appendChild(img);
};

export default renderMenu;
