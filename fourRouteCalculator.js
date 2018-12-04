const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req, res) => {
  let sum = parseInt(req.params.num1) + parseInt(req.params.num2);
  if(!isNaN(req.params.num1) && !isNaN(req.params.num2)){
    res.send(`${req.params.num1} + ${req.params.num2} = ${sum}`);
  } else {
    res.send("Only Numbers Please.");
  }
})

app.get('/sub/:num1/:num2', (req, res) => {
  let result = parseInt(req.params.num1) - parseInt(req.params.num2);
  if(!isNaN(req.params.num1) && !isNaN(req.params.num2)){
    res.send(`${req.params.num1} - ${req.params.num2} = ${result}`);
  } else {
    res.send("Only Numbers Please.");
  }
})

app.get('/mult/:num1/:num2', (req, res) => {
  let result = parseInt(req.params.num1) * parseInt(req.params.num2);
  let result2 = result.toFixed(3);
  if(!isNaN(req.params.num1) && !isNaN(req.params.num2)){
    res.send(`${req.params.num1} * ${req.params.num2} = ${result2}`);
  } else {
    res.send("Only Numbers Please.");
  }
})

app.get('/div/:num1/:num2', (req, res) => {
  let result = parseInt(req.params.num1) / parseInt(req.params.num2);
  let result2 = result.toFixed(3);
  if(!isNaN(req.params.num1) && !isNaN(req.params.num2)){
    res.send(`${req.params.num1} / ${req.params.num2} = ${result2}`);
  } else {
    res.send("Only Numbers Please.");
  }
})

app.get('/*', (req, res) => {
  res.send("Please use the follow this path for doing simple calculations: \nAfter 'localhost:8000/' use '[math operation]/[first number]/[second number]'. \nAvailable math operations are add, mult, sub, and div. \nFor example, to divide 3 by 4, you would type \n'localhost:8000/div/3/4'");
})

app.listen(8000, () => {
  console.log("You are listening to port 8000");
})
