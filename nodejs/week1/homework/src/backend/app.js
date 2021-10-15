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

//route for meals
app.get("/meals", async (request, response) => {
  const copiedMeals = JSON.parse(JSON.stringify(meals));
  const mealsWithReviews = copiedMeals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  response.send(mealsWithReviews);
});

//route for cheap meals
app.get("/cheap-meals", async (request, response) => {
  const copiedMeals = JSON.parse(JSON.stringify(meals));
  const mealsWithReviews = copiedMeals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  const cheapMeals=mealsWithReviews.filter(meal =>meal.price < 70);
  response.send(cheapMeals);
});

//route for large meals
app.get("/large-meals", async (request, response) => {
  const copiedMeals = JSON.parse(JSON.stringify(meals));
  const mealsWithReviews = copiedMeals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  const largeMeals=mealsWithReviews.filter(meal =>meal.maxNumberOfGuests >= 10);
  response.send(largeMeals);
});

//route for random meals
app.get("/meal", async (request, response) => {
  const copiedMeals = JSON.parse(JSON.stringify(meals));
  const mealsWithReviews = copiedMeals.map((meal) => {
    meal.reviews = reviews.filter((review) => review.mealId === meal.id);
    return meal;
  });
  const randomNumber=Math.floor(Math.random() * mealsWithReviews.length);
  const randomMeals=mealsWithReviews[randomNumber];
  response.send(randomMeals);
});

//route for all reservations
app.get("/reservations", async (request, response) => {
  const copiedReservations = JSON.parse(JSON.stringify(reservations));
  response.send(copiedReservations);
  });
  


//route for random reservation
app.get("/reservation", async (request, response) => {
  const copiedReservations = JSON.parse(JSON.stringify(reservations));
  const randomNumber=Math.floor(Math.random() * copiedReservations.length);
  const randomReservation=copiedReservations[randomNumber];
  response.send(randomReservation);
  });
  



module.exports = app;
