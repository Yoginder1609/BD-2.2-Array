const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

//BD 2.2

//1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEvenNumbers(num) {
  return num % 2 === 0;
}

app.get('/even-numbers', (req, res) => {
  let result = numbers.filter((num) => filterEvenNumbers(num));
  res.json(result);
});


//2
let ages = [10, 20, 30, 15, 17, 25];

function filterAgesGreaterThan18(age) {
  return age > 18;
}

app.get("/adult-ages", (req, res) => {
  let result = ages.filter((age) => filterAgesGreaterThan18(age));
  res.json(result);
});


//3
let words = ["apple", "banana", "cherry", "date", "fig", "grape"];

function filterWordsGreaterThanFiveChars(word) {
  return word.length > 5;
}

app.get("/long-words", (req, res) => {
  let result = words.filter(word => filterWordsGreaterThanFiveChars(word));
  res.json(result);
});


//4
let fileSizes = [50, 200, 75, 120, 30, 90, 150];

function filterSmalllerFileSizes(fileSize, filterParam) {
  return fileSize < filterParam;
}

app.get("/small-files", (req, res) => {
  let filterParam = req.query.filterParam;
  let result = fileSizes.filter((fileSize) => filterSmalllerFileSizes(fileSize, filterParam));
  res.json(result);
});















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
