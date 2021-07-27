const boughtCandyPrice = [];

function addCandy(candyType, weight) {
  let price;

  switch (candyType) {
    case "sweet":
      price = 0.5 * weight;
      break;
    case "chocolate":
      price = 0.7 * weight;
      break;
    case "toffee":
      price = 1.1 * weight;
      break;
    case "chewing-gum":
      price = 0.03 * weight;
      break;
  }

  boughtCandyPrice.push(price);
}

addCandy("sweet", 20);
addCandy("chocolate", 15);
addCandy("toffee", 12);
addCandy("chewing-gum", 10);
console.log(boughtCandyPrice);

const amountToSpend = Math.random() * 100;
let boughtCandy = 0;

function canBuyMoreCandy() {
  for (i = 0; i < boughtCandyPrice.length; i++) {
    boughtCandy = boughtCandy + boughtCandyPrice[i];

    console.log(boughtCandy);
  }
  if (boughtCandy < amountToSpend) {
    console.log(
      "you have spent " +
        " " +
        boughtCandy +
        " " +
        "so you can buy more candy,please do"
    );
  } else {
    console.log(
      "you have spent" + " " + boughtCandy + " " + "so enough candy for you"
    );
  }
}
canBuyMoreCandy();
