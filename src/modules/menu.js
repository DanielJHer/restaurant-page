const renderMenu = () => {
  // render html content
  infoDiv.innerHTML = "";

  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Check out our amazing items! <br> <br> Pork...............$15 <br><br> Beef...............$20 <br><br> Chicken...............$18 <br><br> AYCE...............$30";

  const img = document.createElement("img");

  infoDiv.appendChild(headline);
  infoDiv.appendChild(paragraph);
  infoDiv.appendChild(img);
};

export default renderMenu;
