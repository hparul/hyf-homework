const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reviews = require("./data/reviews");
const reservations = require("./data/reservations");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
function getMealsWithReviews(){
  const mealsWithReviews = meals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  return mealsWithReviews;
}
//route for meals
app.get("/meals", async (request, response) => {
 const mealsWithReviews=getMealsWithReviews();
  
  response.send(mealsWithReviews);
});

//route for cheap meals
app.get("/cheap-meals", async (request, response) => {
  
  const mealsWithReviews = getMealsWithReviews();

  const cheapMeals=mealsWithReviews.filter(meal =>meal.price < 70);
  response.send(cheapMeals);
});

//route for large meals
app.get("/large-meals", async (request, response) => {
 
  const mealsWithReviews = getMealsWithReviews();
  
  const largeMeals=mealsWithReviews.filter(meal =>meal.maxNumberOfGuests >= 10);
  response.send(largeMeals);
});

//route for random meals
app.get("/meal", async (request, response) => {
 
  const mealsWithReviews = getMealsWithReviews();
  const randomNumber=Math.floor(Math.random() * mealsWithReviews.length);
  const randomMeals=mealsWithReviews[randomNumber];
  response.send(randomMeals);
});

//route for all reservations
app.get("/reservations", async (request, response) => {
 
  response.send(reservations);
  });
  


//route for random reservation
app.get("/reservation", async (request, response) => {
  
  const randomNumber=Math.floor(Math.random() * reservations.length);
  const randomReservation=reservations[randomNumber];
  response.send(randomReservation);
  });
  



module.exports = app;
