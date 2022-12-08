import renderBtns from "./functions";

const renderContact = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  renderBtns();

  // render html content
  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const paragraph = document.createElement("p");
  paragraph.innerText = "Our contact info!";

  const img = document.createElement("img");
};

export default renderContact;
