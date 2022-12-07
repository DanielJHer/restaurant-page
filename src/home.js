const renderHome = () => {
  const headline = document.createElement("p");
  headline.innerText = "The Best Korean BBQ in the Bay Area!";

  const aboutUs = document.createElement("p");
  aboutUs.innerText =
    "About Us: We are a Korean-American family owned restaurant based in Oakland, CA. We have been open for over ten years and continue to serve the best Korean BBQ in the Bay Area!";

  const img = document.createElement("img");

  contentDiv.appendChild(headline);
  contentDiv.appendChild(aboutUs);
  contentDiv.appendChild(img);
};

export default renderHome;
