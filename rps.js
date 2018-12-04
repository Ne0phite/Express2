const express = require('express');
const app = express();

app.get('/:userChoice', (req, res) => {
  let rand = Math.floor(Math.random() * 3);
  let rock = [{"user":"rock","ai":"rock","result":"tie"},
              {"user":"rock","ai":"paper","result":"lose"},
              {"user":"rock","ai":"scissors","result":"win"}];

  let paper = [{"user":"paper","ai":"rock","result":"win"},
               {"user":"paper","ai":"paper","result":"tie"},
               {"user":"paper","ai":"scissors","result":"lose"}];

  let scissors = [{"user":"scissors","ai":"rock","result":"lose"},
                  {"user":"scissors","ai":"paper","result":"win"},
                  {"user":"scissors","ai":"scissors","result":"tie"}];

  if(req.params.userChoice.toLowerCase() === "rock"){
    res.send("You chose " + req.params.userChoice + " \nAI chose " + rock[rand].ai + " \nYou " + rock[rand].result)
  };
  if(req.params.userChoice.toLowerCase() === "paper"){
    res.send("You chose " + req.params.userChoice + " \nAI chose " + paper[rand].ai + " \nYou " + paper[rand].result)
  };
  if(req.params.userChoice.toLowerCase() === "scissors"){
    res.send("You chose " + req.params.userChoice + " \nAI chose " + scissors[rand].ai + " \nYou " + scissors[rand].result)
  } else {
    res.send("Please make a valid selection. \nType either 'rock', 'paper', or 'scissors' after the 'localhost:800/'")
  }
})

app.get('/*', (req, res) => {
  res.send("Please use the route 'localhost:800/' and \ntype either 'rock', 'paper', or 'scissors' after the /");
})

app.listen(8000, () => {
  console.log("You are listening to port 8000");
})
