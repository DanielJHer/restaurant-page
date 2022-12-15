import initRender from "./modules/initRender";
import renderHome from "./modules/home";
import renderMenu from "./modules/menu";
import renderContact from "./modules/contact";

import "./styles/initRender.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";

const loadPage = (() => {
  // initial render
  initRender();

  // render homepage
  renderHome();

  // adding event listeners for buttons
  const homeBtn = document.querySelector("#homeBtn");
  homeBtn.addEventListener("click", renderHome);

  const menuBtn = document.querySelector("#menuBtn");
  menuBtn.addEventListener("click", renderMenu);

  const contactBtn = document.querySelector("#contactBtn");
  contactBtn.addEventListener("click", renderContact);
})();
