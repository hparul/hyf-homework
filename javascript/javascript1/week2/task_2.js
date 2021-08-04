//array for names of days of week
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getEventWeekday(after_x_days_of_today) {
  const today = new Date();
  dayIndex = today.getDay();//gives index of the weekday
  dayToday = days[dayIndex];//gives name of the weekday

  eventWeekday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + after_x_days_of_today
  );  //gives new date with added days to date
  eventDayIndex = eventWeekday.getDay();//gives index of the new weekday
  eventDay = days[eventDayIndex];//gives name of the new weekday  

  console.log("date today is: " + today);
  console.log("day today is: " + dayToday);

  console.log(
    "date after " + after_x_days_of_today + " " + "days is " + eventWeekday
  );
  console.log(
    "day after " + after_x_days_of_today + " " + "days is " + eventDay
  );
}

getEventWeekday(3);
getEventWeekday(5);

getEventWeekday(10);
getEventWeekday(40);
