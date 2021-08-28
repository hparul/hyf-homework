//step-1
function setTime() {
  setTimeout(() => {
    console.log("Called after 2.5 seconds");
  }, 2500);
}
setTime();

//step-2
function delayedString(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

delayedString(5, "this string logged after 5 seconds");
delayedString(3, "this string logged after 3 seconds");

//step-3-creating button
const clickButton = document.getElementById("myButton");
clickButton.addEventListener("click", callDelayedString);
function callDelayedString() {
  //delayedString(5, "Called after 5 seconds");
}

//step-4

function earthLogger() {
  console.log("Earth");
}
function saturnLogger() {
  console.log("Saturn");
}
function planetLogFunction(callFunction) {
  callFunction();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//step-5

const status = document.querySelector("#status");
const mapLink = document.querySelector("#map-link");
function geoFindMe() {
  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  mapLink.textContent = `This is Latitude: ${latitude} ° ,This is Longitude: ${longitude} °`;
}
function error() {
  status.textContent = "Unable to retrieve your location";
}
document.querySelector("#find-me").addEventListener("click", geoFindMe);

//step-6
/* link=document.getElementById('map-me');
link.addEventListener('click',initMap);
let map;
 
script.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAREvKq6Tsw-gLK1ND-oNz1sI6zkd1_Z9Y&libraries=localContext&v=beta&callback=initMap"


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.68, lng: 12.50},
    zoom: 8,
  });
} */
//step-7

function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});

runAfterDelay(4, earthLogger);

//step-8
// const bodyElement=document.querySelector('body');
window.addEventListener("click", detectDoubleClick);
let clickCount = 0;
function detectDoubleClick() {
  clickCount++;
  if (clickCount === 2) {
    console.log("double click");
  }
  setTimeout(() => {
    clickCount = 0;
  }, 0.5 * 1000);
}

//step-9
function logFunnyJoke() {
  console.log(
    "What do you call a factory that makes okay products? :A satisfactory."
  );
}

function logBadJoke() {
  console.log(
    "what do you call a can opener that doesn't work?  :A can't opener"
  );
}

function jokeCreator(shouldTellFunnyJoke, callbackF, callbackB) {
  if (shouldTellFunnyJoke === "true") {
    callbackF();
  } else {
    callbackB();
  }
}
jokeCreator("true", logFunnyJoke, logBadJoke);
jokeCreator("false", logFunnyJoke, logBadJoke);
