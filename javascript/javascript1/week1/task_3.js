//house price estimator

isHouseCostly(8, 10, 10, 100, 2500000, "Peter");
isHouseCostly(5, 11, 8, 70, 1000000, "Julia");

// The function returns the product of width, depth and height
function getVolume(width, depth, height) {
  return width * depth * height;
}

// function to return ideal house price.
function getIdealHousePrice(width, depth, height, gardenSizeInM2) {
  const volumeInMeters = getVolume(width, depth, height);
const idealHousePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  return idealHousePrice;
}

// function to check if house is costly
function isHouseCostly(
  width,
  depth,
  height,
  gardenSizeInM2,
  housePricePaid,
  userName
) {
  const idealHousePrice = getIdealHousePrice(
    width,
    depth,
    height,
    gardenSizeInM2
  );
  if (housePricePaid > idealHousePrice) {
    console.log(userName, " is paying too much");
  } else {
    console.log(userName, " is paying too little");
  }
}