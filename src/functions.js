const renderBtns = () => {
  console.log("is this working");
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.innerHTML = "Home";
  nav.appendChild(homeBtn);
  homeBtn.addEventListener("click", renderHomeHTML);

  menuBtn.innerHTML = "Menu";
  nav.appendChild(menuBtn);
  menuBtn.addEventListener("click", renderMenuHTML);

  contactBtn.innerHTML = "Contact";
  nav.appendChild(contactBtn);
  contactBtn.addEventListener("click", renderContactHTML);

  return nav;
};

const renderHomeHTML = () => {
  const homeDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "The Best Korean BBQ in the Bay Area!";
  const aboutUs = document.createElement("p");
  aboutUs.innerText =
    "About Us: We are a Korean-American family owned restaurant based in Oakland, CA. We have been open for over ten years and continue to serve the best Korean BBQ in the Bay Area!";
  const img = document.createElement("img");
  homeDiv.appendChild(headline);
  homeDiv.appendChild(aboutUs);
  homeDiv.appendChild(img);

  return homeDiv;
};

const renderMenuHTML = () => {
  const menuDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "Our Menu!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "check out our amazing items";

  const img = document.createElement("img");

  menuDiv.appendChild(headline);
  menuDiv.appendChild(paragraph);
  menuDiv.appendChild(img);

  return menuDiv;
};

const renderContactHTML = () => {
  const contactDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "Our contact info!";

  const img = document.createElement("img");

  contactDiv.appendChild(headline);
  contactDiv.appendChild(paragraph);
  contactDiv.appendChild(img);

  return contactDiv;
};

export { renderBtns, renderHomeHTML, renderMenuHTML, renderContactHTML };
