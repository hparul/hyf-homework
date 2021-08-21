
console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);


div=document.querySelector('div');
const input=document.createElement('input');
input.value="";
div.appendChild(input);
input.addEventListener("keyup", filterProducts);

const input1=document.createElement('input');
input1.value="";
div.appendChild(input1);
input1.addEventListener("keyup", filterProductsByPrice);

const sortType = document.getElementById("selection");
sortType.addEventListener("change", renderSortedProducts(), false);



function filterProducts() {
    const filteredProducts = [];
    products.forEach(product=> {
        if (product.name.includes(input.value)) {
            filteredProducts.push(product);
        }
    });
    renderProducts(filteredProducts);
}

      
function filterProductsByPrice(){

    if (input1.value=="") {
        renderProducts(products);
    } else {
        const filteredProductsByPrice=[];
        products.forEach(product=> {
            if (input1.value!=="" && product.price<=parseInt(input1.value)) {
                filteredProductsByPrice.push(product);
            }
        });
        renderProducts(filteredProductsByPrice);
    }
    
}

function renderSortedProducts() {
    renderProducts(products);
}

function renderProducts(products) {
  const myUL = document.getElementById("productList");
  myUL.innerHTML="";

  products = sortProducts(products);
 
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

function sortProducts(products) {
    const sortType = document.getElementById("selection");
    console.log(sortType.value);
    if ("cheap" === sortType.value) {
        console.log("In cheap");
        products.sort((a, b) => (a.price > b.price) ? 1 : -1)
    } else if ("expensive" === sortType.value) {
        products.sort((a, b) => (a.price < b.price) ? 1 : -1)
    } else if ("name" === sortType.value) {
        products.sort((a, b) => (a.name > b.name) ? 1 : -1)
    }
    return products;
}

renderProducts(products); // This should create the ul and the li's with the individual products details


