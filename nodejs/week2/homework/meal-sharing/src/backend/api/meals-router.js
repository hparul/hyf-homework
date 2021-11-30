const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
  try {
    console.log(meals);
    console.log("in /api/meals");

    const maxPrice = request.query.maxPrice;
    const titles = request.query.title;
    const createdAfter = request.query.createdAfter;
    const limit = request.query.limit;
    if (maxPrice !== undefined && maxPrice !== "") {
      console.log("maxPrice");
      const filteredMeals = meals.filter((meal) => meal.price < maxPrice);
      response.send(filteredMeals);
    } else if (titles !== undefined && titles !== "") {
      console.log("titles");
      const filteredTitle = meals.filter((meal) => meal.title.includes(titles));
      response.send(filteredTitle);
    } else if (createdAfter !== undefined && createdAfter !== "") {
      console.log("createdAfter");
      const filteredDate = meals.filter(
        (meal) => meal.createdAt > createdAfter
      );
      response.send(filteredDate);
    } else if (limit !== undefined && limit !== "") {
      console.log("limit");
      const newMeals = [];
      for (let i = 0; i < limit; i++) {
        console.log(i);
        newMeals.push(meals[i]);
      }
      response.send(newMeals);
    } else {
      let undefinedQueryParam = false;
      for (const key in request.query) {
        undefinedQueryParam = true;
      }
      console.log(undefinedQueryParam);
      if (undefinedQueryParam) {
        response.send("{ Error : Request contains undefined query parameter}");
      } else {
        response.send(meals);
      }
    }
  } catch (error) {
    throw error;
  }
});
router.get("/:id", (request, response) => {
  console.log(request.params);
  const id = parseInt(request.params.id, 10);
  console.log(id);
  const meal = meals.find((meal) => meal.id === id);
  if (meal == undefined) {
    response.send("{ Error : Requested meal does not exist}");
  } else {
    response.send({ data: meal });
  }
});

module.exports = router;
