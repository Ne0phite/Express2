const express = require('express');
const app = express();

const isHex = (h) => {
  return parseInt(h,16).toString(16) == h.toLowerCase()
}

const isBin = (str) => {
let arr = str.split("")
  for(let i = 0; i < arr.length; i++){
      if(arr[i] !== "0" && arr[i] !== "1"){
        return false;
      }
  }
  return true;
}

let obj = {
  "original": { "value":"10", "base":10 },
  "conversions": { "decimal":"10", "binary":"1010", "hex":"a" }
}

app.get('/:num', (req, res) => {

  let num = req.params.num;
  let base = req.params.base;
  obj.original.value = num;

  if(!isNaN(num)){
    obj.original.base = 10;
    obj.conversions.decimal = num;
    obj.conversions.binary = Number(num).toString(2);
    obj.conversions.hex = Number(num).toString(16);
    res.json(obj);
  } else {
    res.send("Please provide a valid Num");
  }
})

app.get('/:num/:base', (req, res) => {

  let num = req.params.num;
  let base = req.params.base;
  obj.original.value = num;

  if(num && base === "dec"){
    if(isNaN(num)){
      res.send("Please provide a valid DECIMAL number");
    }
    obj.original.base = 10;
    obj.conversions.decimal = num;
    obj.conversions.binary = Number(num).toString(2);
    obj.conversions.hex = Number(num).toString(16);
    res.json(obj);

  } else if(num && base === "bin") {
    if(!isBin(num)){
      res.send("Please provide a valid BINARY number");
    }
    obj.original.base = 2;
    obj.conversions.decimal = parseInt(num, 2).toString() ;
    obj.conversions.binary = num;
    obj.conversions.hex = parseInt(num, 2).toString(16);
    res.json(obj);

  } else if (num && base === "hex"){
    if(!isHex(num)){
      res.send("Please provide a valid HEX Num")
    }
    obj.original.base = 16;
    obj.conversions.decimal = parseInt(num, 16).toString();
    obj.conversions.binary = parseInt(num, 16).toString(2)
    obj.conversions.hex = num;
    res.json(obj);

  } else {
    res.send("Please use the following path localhost:8000/{number}/{bin|dec|hex}")
  }
})

app.get("/*", (req, res) => {
  res.send("Please use the following path localhost:8000/{number}/{bin|dec|hex}")
})

app.listen(8000, () => {
  console.log("You are listening to port 8000");
})
