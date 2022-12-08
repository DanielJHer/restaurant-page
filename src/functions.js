const renderBtns = () => {
  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.innerHTML = "Home";
  mainDiv.appendChild(homeBtn);
  homeBtn.addEventListener("click", renderHome);

  menuBtn.innerHTML = "Menu";
  mainDiv.appendChild(menuBtn);
  menuBtn.addEventListener("click", renderMenu);

  contactBtn.innerHTML = "Contact";
  mainDiv.appendChild(contactBtn);
  contactBtn.addEventListener("click", renderContact);

  mainDiv.appendChild(headline);
  mainDiv.appendChild(aboutUs);
  mainDiv.appendChild(img);
};

export default renderBtns;
