function getRightClothes(tempInCelsius) {
  if (tempInCelsius <= 0) {
    return "Stay at home and switch on Heat Radiators";
  } else if (tempInCelsius > 0 && tempInCelsius <= 10) {
    return "Wear jackets and warm lowers";
  } else if (tempInCelsius > 10 && tempInCelsius <= 20) {
    return "Wear full sleeves t-shirt and cotton lowers";
  } else if (tempInCelsius > 20 && tempInCelsius <= 30) {
    return "Wear T-shirt and shorts";
  } else {
    return "Stay at home and switch on AC";
  }
}

clothesToWear = getRightClothes(-5);
console.log(clothesToWear);

clothesToWear = getRightClothes(15);
console.log(clothesToWear);

clothesToWear = getRightClothes(40);
console.log(clothesToWear);
