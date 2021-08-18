
let myName = "";
let todo = [];


function getReply(command) {
  let addSubStr = command.substring(4, command.length);
  let removeSubstr = command.substring(7, command.length);
  let timeSubStr = command.substring(16, command.length);
  const array = command.split(" ");
  let response = "";
  if (command.includes("hello my name is")) {
   
    if (myName == array[4]) {
      response = `nice to see you ${myName}. Welcome back`;
    } else {
      myName = array[4];
      response = `nice to see you ${myName}`;
    }
  } else if (command.includes("what is my name")) {
    response = `my name is ${myName}`;
  
  } else if (command.includes("add ")) {
    todo.push(addSubStr);
    response = `added ${addSubStr}`;
  } else if (command.includes("add ")) {
    todo.push(addSubStr);
    response = `added ${addSubStr}`;
  } else if (command.includes("remove ")) {
    todo.shift();
    
    response = `removed ${removeSubstr}`;
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
      "Saturday",
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
      "December",
    ];
    const curMonth = months[today.getMonth()];
    const curYear = today.getFullYear();
    const currentMonth = months[today.getMonth()];
    const currentYear = today.getFullYear();
    const dateOfMonth = today.getDate();
    response = `today is ${dayOfWeek} , ${dateOfMonth} of ${curMonth} , ${curYear}`;
  } else if (command.includes("What is ")) {
    response = `today is ${dayOfWeek} , ${dateOfMonth} of ${currentMonth} , ${currentYear}`;
  } else if (command.includes("what is ")) {
    const a = parseInt(array[2], 16);
    const b = parseInt(array[4], 16);
    const operator = array[3];

    if (operator === "-") {
      response = a - b;
    }
    if (operator === "*") {
      response = a * b;
    }
  
  } else if (command.includes("set a timer ")) {
    function myFunction() {
      
      console.log("timer set for " + timeSubStr);
    }
    
    setTimeout(myFunction, timeSubStr[0] * 1000); //sets time in milliseconds(5 seconds*1000)
  } else {
    console.log("please give some command");
  }

  return response;
}
console.log(getReply("hello my name is benjamin"));
console.log(getReply("hello my name is benjamin"));
console.log(getReply("hello my name is sofie"));
console.log(getReply("what is my name"));
console.log(getReply("add fishing to my todo "));
console.log(getReply("add singing to my todo"));
console.log(getReply("remove fishing from my todo"));
console.log(getReply("what is on my todo"));
console.log(getReply("what day is it today?"));
console.log(getReply("what is 3 * 3"));
getReply("set a timer for 5 seconds");
getReply("");
