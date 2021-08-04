const travelInformation = {
<<<<<<< HEAD
    speed: 50,
    destinationDistance: 432,
  };
  function destinationTime(travelInformation) {
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
=======
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
>>>>>>> e7e47aa7a11aa6e75e1d19ae7dcfd0a5b2cf740f
