//array for names of days of week
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getEventWeekday(afterXDaysOfToday) {
  const today = new Date();
  
  

  const eventDay=(today.getDay() +afterXDaysOfToday )%7;

    console.log ("Today is " + days[today.getDay()]+"." +"Therefore the event will be held on a " + days[eventDay]) ;

}
getEventWeekday(5);
getEventWeekday(15);

getEventWeekday(3);
getEventWeekday(5);

getEventWeekday(10);
getEventWeekday(40);
