
//dog age calculator

const dogYearOfBirth = 2020;
const dogYearFuture = 2030;
const shouldShowResultInDogYears = true;

const dogYear = dogYearFuture - dogYearOfBirth;

const dogAge = dogYear* 7;
if (shouldShowResultInDogYears === true) {
  console.log(`your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    "your dog will be",
    dogAge,
    "human years old in",
    dogYearFuture
  );
}