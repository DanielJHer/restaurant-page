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

const renderMain = () => {
  const mainDiv = document.createElement("main");
  mainDiv.setAttribute("id", "mainDiv");
  return mainDiv;
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
  const content = document.querySelector("#content");
  content.appendChild(renderBtns());
  content.appendChild(renderMain());
  content.appendChild(renderFooter());
};

export default initRender;
