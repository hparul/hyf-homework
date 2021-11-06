const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    try {
      console.log(reviews);
      console.log("in /api/reviews");
      response.send(reviews);
    } catch (error) {
      throw error;
    }
  });
  
  router.get("/:id", (request, response) => {
    console.log(request.params);
    const id = parseInt(request.params.id, 10);
    console.log(id);
    const review = reviews.find(review => review.id === id);
    response.send({ data: review });
  });
  
  
  module.exports = router;