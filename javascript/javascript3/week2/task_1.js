fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const badMovies = response.filter((element) => element.rating < 7);
    console.log(badMovies);
    const badMoviesSince = badMovies.filter((element) => element.year >= 2000);
    console.log(badMoviesSince);
  });

//creating a promise
function callMeAsynchronously(resolveAfter) {
  
  console.log("starting calling");
  return new Promise((Resolve) => {
    setTimeout(() => {
      Resolve(`is  called asynchronously after ${resolveAfter} seconds`);
    }, resolveAfter*1000);
  });
}
callMeAsynchronously(5)
  .then((returnedObject) => {
    console.log(`the function  ${returnedObject}`);
  });
  

//creating a promise with async/await
async function callMeUsingAwaitAsync() {
  try {
    await callMeAsynchronously(5);
    console.log("I am called asynchronously using async and await function");
  } catch (error) {
    console.log(error);
  }
}
callMeUsingAwaitAsync();


//rewrite function
 function geolocation() {
  const getPositionAsynchronously = true;
  //console.log("locating your position...");
  return new Promise((resolve, reject) => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      if (getPositionAsynchronously) {
        resolve(`latitude:${latitude},longitude:${longitude}`);
      } else {
        reject("Unable to retrieve your location");
      }
    }
    navigator.geolocation.getCurrentPosition(success);
  });
}

geolocation()
  .then((Position) => {
    console.log(`locating your position..${Position}`);
  })
  .catch((error) => {
    console.log(error);
  });

//api


  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      const result = fetch("http://api.open-notify.org/astros.json");
  
      resolve(result);
    }, 3000);
  });
  
  myPromise.then((data) => {
    console.log(data);
  });
  
    
  

toFetchData();

//using async/await

async function toFetchDataUsingAsyncAwait() {
  try {

    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    const data = await response.json();
    
    console.log("showing random dog image ");
    document.getElementById("image").src = data.message;
  } catch (err) {
    console.log(err);
  }
}
toFetchDataUsingAsyncAwait();
