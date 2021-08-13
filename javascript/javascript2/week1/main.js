console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  const myUL = document.getElementById("productList");
  for (let i = 0; i < products.length; i++) {
    // Create the list item:
    const item = document.createElement("li");

    // Set its contents:

    item.innerHTML =
      products[i].name +
      "<br> " +
      " price:" +
      products[i].price +
      " <br> " +
      " rating:" +
      products[i].rating;
    // Add it to the myUL:
    myUL.appendChild(item);
  }

  // Finally, return the constructed list:
  return myUL;
}

renderProducts(products); // This should create the ul and the li's with the individual products details
