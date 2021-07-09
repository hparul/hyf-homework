const boughtCandyPrice = [];
const price_per_gram_sweet = 0.5;
const price_per_gram_chocolate = 0.7;
const price_per_gram_toffee = 1.1;
const price_per_gram_chewing_gum = 0.03;

function addCandy(candyType, weight_in_grams) {
  const totalPrice1 = price_per_gram_sweet * weight_in_grams;
  const totalPrice2 = price_per_gram_chocolate * weight_in_grams;
  const totalPrice3 = price_per_gram_toffee * weight_in_grams;
  const totalPrice4 = price_per_gram_chewing_gum * weight_in_grams;

  //boughtCandyPrice.push(totalPrice1,totalPrice2,totalPrice3,totalPrice4);
  //console.log(boughtCandyPrice);

  if (candyType == "sweet") {
    console.log(
      "price of" +
        " " +
        weight_in_grams +
        " " +
        "grams sweets is:" +
        " " +
        totalPrice1
    );
  } else if (candyType == "chocolate") {
    console.log(
      "price of" +
        " " +
        weight_in_grams +
        " " +
        "grams chocolates is:" +
        " " +
        totalPrice2
    );
  } else if (candyType == "toffee") {
    console.log(
      "price of" +
        " " +
        weight_in_grams +
        " " +
        "grams toffees is:" +
        " " +
        totalPrice3
    );
  } else if (candyType == "chewing-gum") {
    console.log(
      "price of" +
        " " +
        weight_in_grams +
        " " +
        "grams chewing-gum is:" +
        " " +
        totalPrice4
    );
  } else {
    console.log("candy not available");
  }
  boughtCandyPrice.push(totalPrice1, totalPrice2, totalPrice3, totalPrice4);

  return boughtCandyPrice;
}

addCandy("sweet", 20);
addCandy("chocolate", 15);
addCandy("toffee", 12);
addCandy("chewing-gum", 10);
console.log(boughtCandyPrice);

const amountToSpend = Math.random() * 100;
let boughtCandy = 0;

for (i = 0; i < boughtCandyPrice.length; i++) {
  boughtCandy = boughtCandy + boughtCandyPrice[i];

  console.log(boughtCandy);
}

function canBuyMoreCandy() {
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
