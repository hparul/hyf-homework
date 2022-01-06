const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.get("/", (request, res) => res.send("nodejs week3 homework"));

app.get("/calculator/add", (request, response) => {
  console.log(request.query);
  const firstParam = parseInt(request.query.firstParam);
  const secondParam = parseInt(request.query.secondParam);
  const thirdParam = parseInt(request.query.thirdParam);
  const array1=[firstParam,secondParam,thirdParam]

  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  console.log(array1.reduce(reducer));
  //const sum = firstParam + secondParam;
  const sum=array1.reduce(reducer);
  response.send(sum.toString());
});

app.get("/calculator/subtract", (request, response) => {
  console.log(request.query);
  const firstParam = parseInt(request.query.firstParam);
  const secondParam = parseInt(request.query.secondParam);
  const thirdParam = parseInt(request.query.thirdParam);
  const array1=[firstParam,secondParam,thirdParam]
  const reducer = (previousValue, currentValue) => previousValue - currentValue;
  //const subtract = firstParam - secondParam;
  const subtract=array1.reduce(reducer);
  response.send(subtract.toString());
});

app.get("/calculator/multiply", (request, response) => {
  console.log(request.query);
  const firstParam = parseInt(request.query.firstParam);
  const secondParam = parseInt(request.query.secondParam);
  const thirdParam = parseInt(request.query.thirdParam);
  const array1=[firstParam,secondParam,thirdParam]
  const reducer = (previousValue, currentValue) => previousValue * currentValue;
  //const multiply = firstParam * secondParam;
  const multiply=array1.reduce(reducer);
  response.send(multiply.toString());
}); 

app.get("/calculator/divide", (request, response) => {
  console.log(request.query);
  const firstParam = parseInt(request.query.firstParam);
  const secondParam = parseInt(request.query.secondParam);
  const divide = firstParam / secondParam;
  response.send(divide.toString());
});

app.post("/calculator/multiply", (request, response) => {
    console.log(request);
    const firstParam = parseInt(request.body.firstParam);
    const secondParam = parseInt(request.body.secondParam);
    const multiply = firstParam * secondParam;
    response.send(multiply.toString());
  }); 

  app.post("/calculator/division", (request, response) => {
    console.log(request);
    const firstParam = parseInt(request.body.firstParam);
    const secondParam = parseInt(request.body.secondParam);
    const division = firstParam / secondParam;
    response.send(division.toString());
  }); 
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
