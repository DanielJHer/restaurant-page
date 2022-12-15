const renderContact = () => {
  infoDiv.innerHTML = "";

  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const paragraph = document.createElement("p");
  paragraph.innerText =
    "Our contact info!: /br Phone: 777-777-7777 br/ Email: mamakims@koreanbbq.com";

  const img = document.createElement("img");

  infoDiv.appendChild(headline);
  infoDiv.appendChild(paragraph);
  infoDiv.appendChild(img);
};

export default renderContact;
