const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
//route for additon
app.get("/numbers/add", (req, res) => {
  console.log(req.query);
  //const add=req.query.add;
  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const sum = firstNumber + secondNumber;

  console.log(sum);
  res.send(sum.toString());
});

//route for multiplication
app.get("/numbers/multiply", (req, res) => {
  console.log(req.query);

  const firstNumber = parseInt(req.query.first);
  const secondNumber = parseInt(req.query.second);
  const product = firstNumber * secondNumber;

  console.log(product);
  res.send(product.toString());
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
