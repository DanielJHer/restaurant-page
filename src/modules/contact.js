const renderContact = () => {
  infoDiv.innerHTML = "";

  const headline = document.createElement("p");
  headline.innerText = "Contact us!";

  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Our contact info: Phone: 777-777-7777 Email: mamakims@koreanbbq.com <br> <br> Or you can submit the contact form below and we'll be in touch shortly!";

  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = `<form action="#" method="post">
    <fieldset>
        <label for="firstName">First Name</label>
        <input type="text" id="firstName" name="firstName">

        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName">

        <br> 

        <label for="mail">Email</label>
        <input type="email" id="mail" name="email">

        <label for="phoneNumber">Phone Number</label>
        <input type="number" id="phoneNumber" name="phoneNumber">

        <br> 
        
        <button type="submit">Submit</button>
    </fieldset>
    </form>`;

  infoDiv.appendChild(headline);
  infoDiv.appendChild(paragraph);
  infoDiv.appendChild(form);
};

export default renderContact;
