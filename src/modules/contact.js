const renderContact = () => {
  mainDiv.innerHTML = "";

  // render html content
  const contactDiv = document.createElement("div");

  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const paragraph = document.createElement("p");
  paragraph.innerText =
    "Our contact info!: /br Phone: 777-777-7777 br/ Email: mamakims@koreanbbq.com";

  const img = document.createElement("img");

  contactDiv.appendChild(headline);
  contactDiv.appendChild(paragraph);
  contactDiv.appendChild(img);

  mainDiv.appendChild(contactDiv);
};

export default renderContact;
