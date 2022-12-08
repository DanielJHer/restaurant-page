import renderBtns from "./functions";

const renderHome = () => {
  const mainDiv = document.querySelector("#content");
  mainDiv.innerHTML = "";

  // render buttons
  renderBtns();

  // render html content
  const headline = document.createElement("p");
  headline.innerText = "The Best Korean BBQ in the Bay Area!";

  const aboutUs = document.createElement("p");
  aboutUs.innerText =
    "About Us: We are a Korean-American family owned restaurant based in Oakland, CA. We have been open for over ten years and continue to serve the best Korean BBQ in the Bay Area!";

  const img = document.createElement("img");
};

export default renderHome;
