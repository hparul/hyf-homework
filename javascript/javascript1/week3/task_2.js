const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function destinationTime() {
  const timeInHours = Math.floor(
    travelInformation.destinationDistance / travelInformation.speed
  );
  const timeInMinutes = Math.floor(
    ((travelInformation.destinationDistance % travelInformation.speed) /
      travelInformation.speed) *
      60
  );
  console.log(
    `travel Time is ${timeInHours} hours and ${timeInMinutes} minutes`
  );
}

const travelTime = destinationTime(travelInformation);
