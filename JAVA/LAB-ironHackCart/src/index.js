// ITERATION 1: updateSubtotal

// ARROW FUNCTION --> const updateSubtotalArrow = () => {}
// OR
function updateSubtotal(product) {
  // Nos traemos elementos del DOM [price & quantity]
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");

  // Extraer el valor del input :)

  // IS THIS CORRECT???
  // const priceValue = Number(price.innerText);
  // const quantityValue = Number(quantity.value);

  // Number() method --> converts a value to a number.
  // The innerText property --> sets or returns the text content of an element.

  // innerText vs innerHTML:
  // innerText: we can not insert the HTML TimeRanges. It ignores the spaces. It returns text without an inner element tag.
  // innerHTML: we can insert the HTML TimeRanges. It considers the spaces. It return a tag with an innner element tag.

  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;

  // The parseFloat() function --> parses a string argument and returns a floating point number.

  // Calcular estos valores (precio x cantidad)
  const subtotalValue = priceValue * quantityValue;

  // Obtener elemento del DOM === subtotal
  const subTotal = product.querySelector(".subtotal span");

  // Settiar la variable subTotal con un poquito de texto que equivale a la variable de subtotalvalue
  subTotal.innerText = subtotalValue;

  // Return Subtotal value para poder usarlo correctamente en la funcion y poder reusarlo en nuestro codigo
  return subtotalValue;
}

// ITERATION 2: calculateAll()

// Until now We have just one product in our cart but we want to add more. And calculate the total price of our purchase.

// ARROW FUNCTION --> const calculateAll = () => {};

function calculateAll() {
  // Apuntamos a todos los productos del carrito mediante la id = product
  const products = document.getElementsByClassName("product");

  // Declaramos una variable para guardar el valor de cada iteración de los productos.
  let totalValue = 0;

  // ITERATION 3: TOTAL

  // SINTAXIS: for (variable of iterable) {statement}
  // EJEMPLO: let iterable = [10, 20, 30];
  // for (let value of iterable) {
  //   value += 1;
  //   console.log(value); result --> 11, 21, 31
  // }

  // Iterar en base a cada elemento/producto y dentro del body de este bucle vamos a actualizar el valor de la variable totalValue y vamos a usar la función updateSubtotal (product) para poder hacer el cálculo (porque lo que nos permite es multiplicar precio por cantidad)

  for (let product of products) {
    totalValue += updateSubtotal(product);
    // This is like totalValue = totalValue + updateSubtotal(product)
  }

  // Darle display a el valor de este calculo iterado en el html, entonces apuntamos al elemento del dom que contiene ese TOTAL
  document.querySelector("#total-value span").innerText = totalValue;
}

// ---------------->

// The event listener runs a callback function that does the following:
// It fetches an element (button) from the HTML document with the ID "calculate" and assigns it to a variable named "calculatePricesBtn".
// It then attaches another event listener to the "click" event of the "calculatePricesBtn" element. This event listener will run a function named "calculateAll" when the button is clicked.
// In other words, this code sets up the calculation function "calculateAll" to be run when the "calculate" button is clicked.
window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
});

// ---------------->

// ITERATION 4: REMOVING A PRODUCT

// - Querying the document for all remove buttons
// - Loop through them and add a click event listener
// - Pass the function removeProduct

function removeProduct(event) {
  // event.currentTarget es una propiedad de los objetos de evento en JavaScript que se refiere al elemento DOM al que está asociado el controlador de eventos actual. Se utiliza a menudo dentro de los manejadores de eventos para identificar el elemento al que se ha aplicado el evento.

  // Por ejemplo, si tiene varios elementos con el mismo controlador de eventos y desea saber cuál de ellos ha generado el evento, puede utilizar event.currentTarget para determinarlo.

  const target = event.currentTarget;

  // Verifciar que esta conectada la funcion post creacion del eventListener dentro del Window object
  console.log("The target in remove is:", target);

  // Usamos el parentNode para apuntar al ABUELO de row que contiene el evento especifico que estamos apuntando casualmente el abuelo de este evento es el elemento TR con la clase product.

  // La propiedad de sólo lectura node.parentNode devuelve el padre del nodo especificado en el árbol.

  const row = target.parentNode.parentNode;
  console.log(row);

  // Usamos el parentNode en la variable row para aprovechar los selectores de manipulación del DOM para eliminar el hijo de parent.
  const parent = row.parentNode;

  console.log(parent);

  // llamamos a parent con el metodo removeChild y le pasamos la variable row dentro del metodo.

  parent.removeChild(row);

  // calculateAll() - vuelve a calcular los numeros para tener un resultado correcto una vez borremos el producto.
  calculateAll();
}

// ---------------->

// DOM para borrar productos
const removeBtns = document.querySelectorAll(".btn-remove");
for (let removeBtn of removeBtns) {
  removeBtn.addEventListener("click", removeProduct);
}

// A través del addEventListener lo que hacemos es asociar una función a un evento en un elemento HTML. Cuando el evento ocurre (por ejemplo, cuando se hace clic en un botón), se ejecuta la función asociada.

// En este caso cuando hacemos click en el botón de eliminar (este es nuestro evento, hacer click) (apuntamos a él con la clase btn-remove) se ejecuta la función removeProduct (la función asociada).

// ---------------->

// ITERATION 5: CREATING NEW PRODUCTS
// In createProduct you should target the name and unit price input DOM nodes, extract their values, add a new row to the table with the product name and unitary price, as well as the quantity input and "Remove" button, and ensure that all of the functionality works as expected.

function createProduct() {
  // Parte 1
  const createRow = document.querySelector(".create-product");

  let newProdNameInput = createRow.querySelector("input");
  let newProdNameValue = newProdNameInput.value;

  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  // Parte 2

  // Creamos una nueva row en la tabla:
  const newTableRow = document.createElement("tr");

  // Añadimos a esta nueva columna la clase product:
  newTableRow.className = "product";

  // Añadimos a esta nueva columna el contenido HTML:

  // PERO...newProdNameValue y newProdPriceValue nos permitirá actualizar tanto el nombre del producto como el precio
  newTableRow.innerHTML = `
    <td class="name">
    <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;

  // Parte 3
  // Agarrr el padre de los rows mediante un poco de DOM
  const parent = document.querySelector("#cart tbody");

  // Adjuntar la variable newTableRow dentro de parent :)
  parent.appendChild(newTableRow);
  // Utilizamos el método appendChild para apregar esta nueva row a la tabla

  // Recibir logica de botones
  const removeBtn = newTableRow.querySelector(".btn-remove");
  removeBtn.addEventListener("click", removeProduct);

  // Limpiar los inputs una vez el usaurio haya creado un producto
  newProdNameInput.value = "";
  newProdPriceInput.value = 0;
}

// ---------------->

// DOM para crear productos
const createBtn = document.querySelector("#create");
if (createBtn) {
  createBtn.addEventListener("click", createProduct);
}