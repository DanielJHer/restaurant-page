const renderBackground = () => {
  const background = document.createElement("img");
  background.src = "images/background.jpg";
  background.alt = "Oops!";
  background.classList.add("backgroundPic");

  return background;
};

const renderNav = () => {
  const nav = document.createElement("nav");

  const headline = document.createElement("p");
  headline.innerText = "Mama Lee's Korean BBQ!";
  headline.classList.add("headline");

  nav.appendChild(headline);

  const homeBtn = document.createElement("button");
  homeBtn.setAttribute("id", "homeBtn");
  homeBtn.classList.add("navBtn");
  const menuBtn = document.createElement("button");
  menuBtn.setAttribute("id", "menuBtn");
  menuBtn.classList.add("navBtn");
  const contactBtn = document.createElement("button");
  contactBtn.setAttribute("id", "contactBtn");
  contactBtn.classList.add("navBtn");

  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("btnsDiv");
  homeBtn.innerHTML = "Home";
  btnsDiv.appendChild(homeBtn);

  menuBtn.innerHTML = "Menu";
  btnsDiv.appendChild(menuBtn);

  contactBtn.innerHTML = "Contact";
  btnsDiv.appendChild(contactBtn);

  nav.appendChild(btnsDiv);

  return nav;
};

const renderInfo = () => {
  const infoDiv = document.createElement("div");
  infoDiv.setAttribute("id", "infoDiv");
  infoDiv.classList.add("infoDiv");
  return infoDiv;
};

const renderFooter = () => {
  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footerDiv");

  const copyrightText = document.createElement("span");
  copyrightText.innerText = "Copyright © Daniel Her 2022";

  const gitBtn = document.createElement("img");
  gitBtn.src = "images/github-mark-white.png";
  gitBtn.alt = "oops!";
  gitBtn.onclick = () => {
    location.href = "https://github.com/DanielJHer";
  };
  gitBtn.classList.add("gitBtn");

  footerDiv.appendChild(copyrightText);
  footerDiv.appendChild(gitBtn);

  return footerDiv;
};

const initRender = () => {
  const body = document.querySelector("body");
  body.appendChild(renderBackground());

  const content = document.querySelector("#content");
  content.appendChild(renderNav());
  content.appendChild(renderInfo());
  content.appendChild(renderFooter());
};

export default initRender;
