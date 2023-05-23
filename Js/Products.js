function search_products() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  // declaro una variable llamada input.
  // a esa variable le asigno el valor de lo que el user escribe en el input. y que yo llame como id="searchbar"
  // con la funcion toLowerCase le digo que me busque tanto si está en mayúscula o minúscula
  let x = document.getElementsByClassName("product");
  // declaro la variable x y le asigno lo que me trae la clase "product"
  let productFound = false;
  // declaro una variable que va a tener los productos encontrados en false para poder setear en true en caso de que haya encontrado los productos
  for (let i = 0; i < x.length; i++) {
    // con el ciclo for, va a recorrer todos los elementos de x hasta que llegue a la longitud de x. osea hasta que no haya mas elementos para recorrer
    let product = x[i].innerHTML.toLowerCase();
    // guardo en la var product, el contenido de cada elemento q tiene la clase "product"
    if (product.includes(input)) {
      // pregunto si el elemento que recibe como valor el input, está incluido en product
      x[i].style.display = "table";
      // y le agrego un estilo para mostrarlo
      productFound = true;
      // seteo en true la var
    } else {
      // y si no está el producto que no muestre nada
      x[i].style.display = "none";
    }
  }
  let errorMessage = document.getElementById("message");
  if (!productFound) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
}
