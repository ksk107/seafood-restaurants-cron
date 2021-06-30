/**
 * generateReport
 * @param {object} res
 * @return
 */

 const generateReport = (res) => {
  if (isValidJson(res) && res.noOfRestaurants > 0) {
    console.log(
      `According to yelp reviews zip code ${res.zipCode} has the best seafood restaurants in Boston with ${res.noOfRestaurants} restaurants having an average rating of ${res.maxRating}`
    );
    console.log(``);
  } else {
    console.log(
      `There are not enough reviews in yelp to make a conclusive decision`
    );
  }
};

const isValidJson = (data) => {
  return data && Object.keys(data).length;
};

module.exports = { generateReport };
