const renderBackground = () => {
  const background = document.createElement("img");
  background.src = "images/background.jpg";
  background.alt = "Oops!";
  background.classList.add("backgroundPic");

  return background;
};

const renderBtns = () => {
  const nav = document.createElement("nav");

  const headline = document.createElement("p");
  headline.innerText = "Mama Lee's Korean BBQ!";
  headline.classList.add("headline");

  nav.appendChild(headline);

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "homeBtn");
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("id", "contactBtn");

  homeBtn.innerHTML = "Home";
  nav.appendChild(homeBtn);

  menuBtn.innerHTML = "Menu";
  nav.appendChild(menuBtn);

  contactBtn.innerHTML = "Contact";
  nav.appendChild(contactBtn);

  return nav;
};

const renderInfo = () => {
  const infoDiv = document.createElement("div");
  infoDiv.setAttribute("id", "infoDiv");
  return infoDiv;
};

const renderFooter = () => {
  const footerDiv = document.createElement("div");
  footerDiv.setAttribute("id", "footer");

  const copyrightText = document.createElement("span");
  copyrightText.innerText = "Copyright © Daniel Her 2022";

  const gitBtn = document.createElement("button");
  gitBtn.innerHTML = "Github";
  gitBtn.onclick = () => {
    location.href = "https://github.com/DanielJHer";
  };

  footerDiv.appendChild(copyrightText);
  footerDiv.appendChild(gitBtn);

  return footerDiv;
};

const initRender = () => {
  const body = document.querySelector("body");
  body.appendChild(renderBackground());

  const content = document.querySelector("#content");
  content.appendChild(renderBtns());
  content.appendChild(renderInfo());
  content.appendChild(renderFooter());
};

export default initRender;
