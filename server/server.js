const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fs = require("fs"); //file system Library
app.use(bodyParser.json());
app.use(cors());

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const harrow = require("./data/Harrow.json");
const heathrow = require("./data/Heathrow.json");
const stratford = require("./data/Stratford.json");
const combinedData = {
  harrow: harrow,
  heathrow: heathrow,
  stratford: stratford,
};

app.get('/citiesName', function (req, res) {
  const arrayOfCities = Object.keys(combinedData);
 res.send(arrayOfCities)
});


app.get('/:city', function (req, res) {
  const arrayOfCities = Object.keys(combinedData);
  const city=req.params.city;
  if (arrayOfCities.indexOf(city) < 0) {
    res.sendStatus(400);
    return;
  }
  const arrayAvaliablePlacesOfCity=Object.keys(combinedData[city])
   res.send(arrayAvaliablePlacesOfCity)
});



app.get("/:city/:category", function (req, res) {
  const city = req.params.city;
  const category = req.params.category;
  const arrayOfCities = Object.keys(combinedData);

  if (arrayOfCities.indexOf(city) < 0) {
    res.sendStatus(400);
    return;
  }
  const arrayOfCategories = Object.keys(combinedData[city]);
  if (arrayOfCategories.indexOf(category) < 0) {
    res.sendStatus(400);
    return;
  }

  res.send(combinedData[city][category]);
});





const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port : ${port}`);
});
