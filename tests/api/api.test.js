const api = require("../../api");
require("dotenv").config({ path: "../../env.development" });
const url = process.env.API_URL;
const api_key = process.env.API_KEY;
const data = require("./data.json");
const data1 = require("./data1.json");
let ratingMap = new Map();
let countMap = new Map();
let resultratingMap = new Map();
resultratingMap.set("02113", 4.3);
let resultcountMap = new Map();
resultcountMap.set("02113", 2);
const maxRating = 0;
const zipCode = "";
const noOfRestaurants = 0;
const finalMaxRating = 4.3;
const finalZipCode = "02113";
const finalNoOfRestaurants = 2;

test("Running filter method with dummy data with number of reviews less than 50", () => {
  expect(
    api.filter(data1, ratingMap, countMap, maxRating, zipCode, noOfRestaurants)
  ).toStrictEqual([ratingMap, countMap, maxRating, zipCode, noOfRestaurants]);
});

test("Running filter method with dummy data", () => {
  expect(
    api.filter(data, ratingMap, countMap, maxRating, zipCode, noOfRestaurants)
  ).toStrictEqual([
    resultratingMap,
    resultcountMap,
    finalMaxRating,
    finalZipCode,
    finalNoOfRestaurants,
  ]);
});
