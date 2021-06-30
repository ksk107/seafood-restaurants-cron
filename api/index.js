/**
 * api_call
 * @param {string} url
 * @param {string} api_key
 * @return {Object{}} Zip code, no of restaurants and average review of restaurants in the zip code || empty object
 */
 const axios = require("axios");

 const api_call = async (url, api_key) => {
   let offset = 0;
   let size = 50;
   let total = 800;
   let ratingMap = new Map();
   let countMap = new Map();
   let zipCode = "";
   let maxRating = 0;
   let noOfRestaurants = 0;
   do {
     await axios
       .get(url, {
         headers: {
           Authorization: `Bearer ${api_key}`,
         },
         params: {
           term: "best seafood restaurant",
           location: "Boston",
           limit: size,
           offset: offset,
           radius: "16094",
           categories: "Restaurants",
           sort_by: "review_count",
         },
       })
       .then((res) => {
         [ratingMap, countMap, maxRating, zipCode, noOfRestaurants] = filter(
           res.data,
           ratingMap,
           countMap,
           maxRating,
           zipCode,
           noOfRestaurants
         );
 
         offset += size;
       })
       .catch((err) => {
         console.log({ err });
         console.log(`Unable to connect to Yelp API. Try again later`);
         return {};
       });
   } while (offset + size <= total);
 
   return { zipCode, maxRating, noOfRestaurants };
 };
 
 const filter = (
   data,
   ratingMap,
   countMap,
   maxRating,
   zipCode,
   noOfRestaurants
 ) => {
   const businesses = data.businesses;
   for (let i in businesses) {
     if (businesses[i].review_count >= 50) {
       if (!ratingMap.has(businesses[i].location.zip_code)) {
         ratingMap.set(
           businesses[i].location.zip_code,
           parseFloat(businesses[i].rating)
         );
         countMap.set(businesses[i].location.zip_code, 1);
       } else {
         let count = countMap.get(businesses[i].location.zip_code);
         let totalRating =
           ratingMap.get(businesses[i].location.zip_code) * count;
         totalRating += parseFloat(businesses[i].rating);
         count++;
         let avgRating = (totalRating / count).toFixed(1);
         ratingMap.set(businesses[i].location.zip_code, parseFloat(avgRating));
         countMap.set(businesses[i].location.zip_code, count);
       }
     }
   }
 
   for (var [key, value] of ratingMap) {
     if (maxRating < value && countMap.get(key) >= 2) {
       maxRating = value;
       zipCode = key;
       noOfRestaurants = countMap.get(key);
     }
   }
 
   return [ratingMap, countMap, maxRating, zipCode, noOfRestaurants];
 };
 
 module.exports = { api_call, filter };
 