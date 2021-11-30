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
    let filteredMeals=meals;
    if (maxPrice !== undefined && maxPrice !== "") {
      console.log('maxPrice');
      filteredMeals = meals.filter((meal) => meal.price < parseInt(maxPrice));
      //response.send(filteredMeals);
    }
    if (titles !== undefined && titles !== "") {
      console.log("titles");
      filteredMeals = filteredMeals.filter((meal) =>
        meal.title.includes(titles)
      );
      //response.send(filteredTitle);
    }
    if (createdAfter !== undefined && createdAfter !== "") {
      console.log(createdAfter);
      console.log(filteredMeals);

      filteredMeals = filteredMeals.filter(
        (meal) => meal.createdAt > new Date(createdAfter)
      );
      console.log(filteredMeals);
    }
    if (limit !== undefined && limit !== "") {
      console.log("limit");
      const newMeals = [];
      for (let i = 0; i < limit; i++) {
        console.log(i);
        newMeals.push(filteredMeals[i]);
      }
      filteredMeals=newMeals;
      //response.send(newMeals);
    } 
    /* else {
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
    } */
    response.send(filteredMeals);
 
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
    response.send( {data: meal} );
  }
});

module.exports = router;
