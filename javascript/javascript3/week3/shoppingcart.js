class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.currencies = ["USD", "INR", "EUR"];
    this.currencyPrices = [0.16, 11.62, 0.13];
  }
  convertToCurrency(currency) {
    for (let i = 0; i < this.currencies.length; i++) {
      if (currency === this.currencies[i]) {
        return this.price * this.currencyPrices[i];
      }
    }
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log("Added Product", product);
    console.log(this.products);
  }

  removeProduct(product) {
    const result = this.products.filter(
      (item) => item.name !== product.name || item.price !== product.price
    );
    console.log(result);
  }

  getTotal() {
    let totalCost = 0;
    this.products.forEach((item) => {
      console.log(item.price);
      totalCost += item.price;
      console.log(totalCost);
    });
    return totalCost;
  }

  renderProductsByList(productsList) {
    const ulist = document.getElementById("ulist");
    ulist.innerHTML = "";
    for (let i = 0; i < productsList.length; i++) {
      const list = document.createElement("li");
      list.innerHTML = `name:${productsList[i].name}<br>price:${productsList[i].price}`;
      ulist.appendChild(list);
    }
    return ulist;
  }

  renderProducts() {
    this.renderProductsByList(this.products);
  }

  searchProduct(productName) {
    const result = this.products.filter((item) => item.name === productName);
    console.log(result);
    return result;
  }

  getUser() {
    let userPromise = new Promise(function (myResolve, myReject) {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => myResolve(response.json()))
        .catch((error) => myReject("Error"));
    });

    return userPromise;
  }
}

// construct shopping card
const shoppingCart = new ShoppingCart();
const flatScreen = new Product("flat-screen", 5000);
const iphone = new Product("iphone13", 20000);
const furniture = new Product("study-table", 3000);
const candles = new Product("candles", 100);
const camera = new Product("camera", 6000);
const shirt = new Product("shirt", 1000);
const iceCream = new Product("ice-cream", 100);
const fridge = new Product("fridge", 7000);
const toys = new Product("toys", 3000);
const tShirt = new Product("t-shirt", 900);
const cake = new Product("cake", 500);
const sunsCream = new Product("sunscream", 300);

// add products
shoppingCart.addProduct(flatScreen);
shoppingCart.addProduct(iphone);
shoppingCart.addProduct(furniture);
shoppingCart.addProduct(candles);
shoppingCart.addProduct(camera);
shoppingCart.addProduct(shirt);
shoppingCart.addProduct(iceCream);
shoppingCart.addProduct(fridge);
shoppingCart.addProduct(toys);
shoppingCart.addProduct(tShirt);
shoppingCart.addProduct(cake);
shoppingCart.addProduct(sunsCream);

//remove product
shoppingCart.removeProduct(furniture);

shoppingCart.searchProduct(flatScreen);

// render username to shopping cart
let userDataPromise = shoppingCart.getUser();
userDataPromise.then(
  function (userData) {
    console.log(userData);
    console.log(userData.username);
    const user = document.getElementById("username");
    user.innerHTML = `username: ${userData.username}`;
  },
  function (error) {
    console.log(error);
  }
);

// render total
let totalCost = shoppingCart.getTotal();
const cost = document.getElementById("totalcost");
cost.innerHTML = `totalcost : ${totalCost}`;

// render products
shoppingCart.renderProducts();

//shoppingCart.filterProductsByName();
let input = document.getElementById("product");
input.addEventListener("keyup", filterProductsByName);

function filterProductsByName() {
  console.log(input.value);
  if (input.value === "") {
    shoppingCart.renderProducts();
  } else {
    let filteredProducts = shoppingCart.searchProduct(input.value);
    console.log(filteredProducts);
    shoppingCart.renderProductsByList(filteredProducts);
  }
}

console.log(sunsCream.price);
console.log(sunsCream.convertToCurrency("INR"));
console.log(sunsCream.convertToCurrency("USD"));
