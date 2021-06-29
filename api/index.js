/**
 * api_call
 * @param {string} url
 * @param {string} api_key
 * @return {Promise<data>} data containing few fields from the api response || empty object
 */
 const axios = require("axios");

 const api_call = async (url, api_key) => {
   return await axios
     .get(
       `${url}?term=best seafood restaurant&location=Boston&sort_by=rating&limit=10`,
       {
         headers: {
           Authorization: `Bearer ${api_key}`,
         },
       }
     )
     .then((res) => {
       let json = { data: [] };
       const businesses = res.data.businesses;
       for (let i in businesses) {
         json.data[i] = {
           name: businesses[i].name,
           phoneNumber: businesses[i].phone,
           location: businesses[i].location,
           rating: businesses[i].rating,
           noOfReviews: businesses[i].review_count,
         };
       }
 
       return json;
     })
     .catch((err) => {
       console.log(`Unable to connect to Yelp API. Try again later`);
       return {};
     });
 };
 
 module.exports = { api_call }; 