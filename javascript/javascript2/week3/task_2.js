//step-1
const array = [myName, myAge, myAddress];
array.forEach((element) => {
  element();
});

function myName(name) {
  let name = "John";
  console.log("My name is" + " " + name);
}
function myAge(age) {
  const age = "20 yrs";
  console.log("My age is" + "  " + age);
}
function myAddress(address) {
  const address = "street 10,Copenhagen";
  console.log("My address is" + " " + address);
}

//step-2

console.log(findMyPhone());
function findMyPhone() {
  return "your phone is in kitchen";
}

const findWallet = function findMyWallet() {
  return "your wallet is in kitchen";
};
console.log(findWallet());

//step-3

const myObject = { marks: getYourMarks, rank: getYourRank };

function getYourMarks() {
  console.log("I have got 99% marks in 12th class");
}
function getYourRank() {
  console.log("I am the topper of my School");
}

myObject.marks();
myObject.rank();
