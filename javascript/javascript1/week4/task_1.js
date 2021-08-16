let myName = "";
let todo = [];

function getReply(command) {
  const array = command.split(" ");
  let response="";
  if (command.includes("hello my name is")) {
    myName = array[4];
    response = `nice to see you ${myName}`;
  } else if (command.includes("what is my name")) {
    response = `my name is ${myName}`;
  } else if (command.includes("add fishing")) {
    todo.push("fishing");
    response = "added fishing to todo";
  } else if (command.includes("add singing")) {
    todo.push("singing");
    response = "added singing to todo";
  } else if (command.includes("remove fishing")) {
    todo.shift();
    response = "removed fishing from todo";
  } else if (command.includes("what is on ")) {
    response = todo;
  } else if (command.includes("what day ")) {
    const today = new Date();
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const dayOfWeek = weekday[today.getDay()];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const curMonth = months[today.getMonth()];
    const curYear = today.getFullYear();
    const dateOfMonth = today.getDate();
    response = `today is ${dayOfWeek} , ${dateOfMonth} of ${curMonth} , ${curYear}`;
  } else if (command.includes("What is ")) {
    const a = parseInt(array[2],16);
    const b = parseInt(array[4],16);
    const operator = array[3];

    if (operator === "+") {
      response = a + b;
    }
    if (operator === "*") {
      response = a * b;
    }

    if (operator === "-") {
      response = a - b;
    }
  } else if (command.includes("set a timer")) {
    function myFunction() {
      console.log("timer set for 5 seconds");
    }
    setTimeout(myFunction, 5000); //sets time in milliseconds(5 seconds*1000)
  }

  return response;
}
console.log(getReply("hello my name is benjamin"));
console.log(getReply("hello my name is sofie"));
console.log(getReply("what is my name"));
console.log(getReply("add fishing to my todo "));
console.log(getReply("add singing in the shower to my todo"));
console.log(getReply("remove fishing from todo"));
console.log(getReply("what is on my todo"));
console.log(getReply("what day is it today?"));
console.log(getReply("what is 3 * 3"));
getReply("set a timer for 5 seconds");
