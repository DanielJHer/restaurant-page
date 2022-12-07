const renderContact = () => {
  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const aboutUs = document.createElement("p");
  aboutUs.innerText = "Our contact info!";

  const img = document.createElement("img");

  contentDiv.appendChild(headline);
  contentDiv.appendChild(aboutUs);
  contentDiv.appendChild(img);
};

export default renderContact;
