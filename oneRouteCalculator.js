const express = require('express');
const app = express();

let message = `Follow the path: After 'localhost:8000/' use '[math operation]/[first number]/[second number]'. \nAvailable math operations are add, sub, mult, and div. \nFor example, to divide 3 by 4, you would type 'localhost:8000/div/3/4' \nUse numbers for number arguments`;

app.get('/:operator/:num1/:num2', (req, res) => {
  let op = req.params.operator;
  let num1 = req.params.num1;
  let num2 = req.params.num2;
  let opArr = ['add', 'sub', 'mult', 'div'];

  if(!opArr.includes(op) || isNaN(num1) || isNaN(num2) ){
    // console.log(!opArr.includes(op), isNaN(num1), !isNaN(num2) )
    res.send(message);
  } else if (opArr.includes(op) && !isNaN(num1) && !isNaN(num2) ){

    if( op === "add" ){
      let result = parseInt(num1) + parseInt(num2);
      res.send(`${num1} + ${num2} = ${result}`);

    } else if( op === "sub" ){
      let result = parseInt(num1) - parseInt(num2);
      res.send(`${num1} - ${num2} = ${result}`);

    } else if( op === "mult" ){
      let result = parseInt(num1) * parseInt(num2);
      let result2 = result.toFixed(3);
      res.send(`${num1} * ${num2} = ${result2}`);

    } else if( op === "div" ){
      let result = parseInt(num1) / parseInt(num2);
      let result2 = result.toFixed(3);
      res.send(`${num1} / ${num2} = ${result2}`);
    }
  } else {
    res.send(message);
  }
})

app.get('/*', (req, res) => {
  res.send(message);
})

app.listen(8000, () => {
  console.log("You are listening to port 8000");
})
