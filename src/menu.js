const renderMenu = () => {
  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const aboutUs = document.createElement("p");
  aboutUs.innerText = "check out our amazing items";

  const img = document.createElement("img");

  contentDiv.appendChild(headline);
  contentDiv.appendChild(aboutUs);
  contentDiv.appendChild(img);
};

export default renderMenu;
