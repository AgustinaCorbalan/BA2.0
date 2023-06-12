function formSend(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("mail").value;
  let comment = document.getElementById("comment").value;
  let form = document.getElementById("contactForm");
  let footer = document.getElementById("footer");
  var mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "" || comment === "") {
    alert("los campos: nombre, email y comentario, deben completarse");
  } else if (!mailPattern.test(email)) {
    alert("Debes escribir un mail valido");
    document.getElementById("mail").value = "";
  } else {
    form.style.display = "none";
    footer.style.display = "none";
    var parentElement = document.getElementById("contactMessage");
    var contactImage = document.createElement("img");
    contactImage.src = "../Images/gracias.png";
    parentElement.appendChild(contactImage);
    setTimeout(function () {
      window.location.href = "../index.html";
    }, 3000);
  }
}
