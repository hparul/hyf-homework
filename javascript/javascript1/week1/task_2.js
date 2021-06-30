
//dog age calculator

let dogYearOfBirth = 2020;
let dogYearFuture = 2027;
let shouldShowResultInDogYears = true;

const dogYear = dogYearFuture - dogYearOfBirth;

let humanYear = dogYear / 7;
if (shouldShowResultInDogYears === true) {
  console.log("your dog will be", dogYear, "dog years old in", dogYearFuture);
} else {
  console.log(
    "your dog will be",
    humanYear,
    "human years old in",
    dogYearFuture
  );
}