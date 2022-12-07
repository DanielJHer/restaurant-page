import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";

const createPage = (() => {
  const contentDiv = document.querySelector("#content");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.innerHTML = "Home";
  contentDiv.appendChild(homeBtn);
  homeBtn.addEventListener("click", renderHome);

  menuBtn.innerHTML = "Menu";
  contentDiv.appendChild(menuBtn);
  menuBtn.addEventListener("click", renderMenu);

  contactBtn.innerHTML = "Contact";
  contentDiv.appendChild(contactBtn);
  contactBtn.addEventListener("click", renderContact);
})();
