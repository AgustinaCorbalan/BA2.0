function search_products() {
  let input = document.getElementById("searchbar").value;
  // declaro una variable llamada input.
  // a esa variable le asigno el valor de lo que el user escribe en el input. y que yo llame como id="searchbar"
  // console.log(input, "soy input");
  input = input.toLowerCase();
  // con la funcion toLowerCase le digo que me busque tanto si está en mayúscula o minúscula
  let x = document.getElementsByClassName("product");
  // declaro la variable x y le asigno lo que me trae la clase "product"
  // console.log("longitud", x.length);
  for (i = 0; i < x.length; i++) {
    // con el ciclo for, va a recorrer todos los elementos de x hasta que llegue a la longitud de x. osea hasta que no haya mas elementos para recorrer
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "table";
    }
  }
}

function send() {
  let Name = document.getElementById("name");
  let Mail = document.getElementById("mail");
  Name || Mail === ""
    ? alert("Debes completar todos los campos")
    : document.write("Gracias por comunicarse con nosotros!");
}
