// On a local machine its port 3000
const HTTP_PORT = process.env.PORT || 5000;

/*
  Import modules
*/
const express = require("express");
const path = require("path");

// Import moment.js
var moment = require('moment');
moment().format();

// Import UUID
const { v4: uuidv4 } = require('uuid');

// Execute the express module
const app = express();

const cors = require('cors');
app.use(cors());

// Ensures that the incoming response (server back to client) supports a JSON format
app.use(express.json());

// Required for form submission
app.use(express.urlencoded({ extended: false }));

// Required to read and modfiy the json files
var fs = require("fs");
var drugsJSON = fs.readFileSync("./drugs.json");

// Read and parse the records.json file
var drugs = JSON.parse(drugsJSON);

// Create Portion
app.post("/drugs", (req, res) => {
  console.log(req.body);
  console.log("captured");
  // Using Moment.JS to get the dateAdded
  const year = moment().year();
  const day = moment().date();
  const month = moment().month() + 1;

  const summaryText = `Please google '${req.body.Name}' to learn more about the drug`

  // uuidv4() represents the Universal Unique Identifier which was obtained through the 
  // uuid npm package
  const newEntry = {
    UUID: uuidv4(),
    Name: req.body.Name,
    dateAdded: year + "-" + month + "-" + day,
    Summary: summaryText,
    qtyAvailable: req.body.qtyAvailable
  }

  drugs.push(newEntry);

  // Update the drugs.json file 
  fs.writeFile("./drugs.json", JSON.stringify(drugs), function (err) {
    if (err) throw err;
    console.log("File successfully updated.");
  });
  res.send("Added new drug");
});

// Read Portion - Getting all of the drugs
app.get("/drugs", (req, res) => {
  res.send(drugs);
});

// Read Portion - Getting a specific drug
app.get("/:UUID", (req, res) => {
  const UUID = req.params.UUID;

  const drugSpecs = drugs.find((drug) => drug.UUID === UUID);

  res.send(drugSpecs);
});

// Update Portion - Updating a specific drug
app.patch("/:UUID", (req, res) => {
  const id = req.params.UUID;
  const { Name, qtyAvailable } = req.body;

  // Finding the specified drug
  const drugSelect = drugs.find((drug) => drug.UUID === id);

  // Updating the selected properties of the specified drug
  if (Name) {
    drugSelect.Name = Name;
  }

  if (qtyAvailable || qtyAvailable == 0) {
    drugSelect.qtyAvailable = qtyAvailable;
  }

  res.send(`Drug with the ID:${id} has been updated`);
});

// Delete Portion - Deleting a specific drug
app.delete("/:UUID", (req, res) => {
  const UUID = req.params.UUID;

  drugs = drugs.filter((drug) => drug.UUID !== UUID);

  res.send(`Drug with the ID:${UUID} has been deleted`);
});


const server = app.listen(HTTP_PORT, function () {
  console.log(`Listening on port ${HTTP_PORT}`);
});