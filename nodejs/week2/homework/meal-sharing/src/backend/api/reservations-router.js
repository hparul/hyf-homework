const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    try {
      console.log(reservations);
      console.log("in /api/reservations");
      response.send(reservations);
    } catch (error) {
      throw error;
    }
  });
  
  router.get("/:id", (request, response) => {
    console.log(request.params);
    const id = parseInt(request.params.id, 10);
    console.log(id);
    const reservation = reservations.find(reservation => reservation.id === id);
    response.send({ data: reservation });
  });
  
  module.exports = router;