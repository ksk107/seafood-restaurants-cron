const report = require("../../report");

const mock = null;
const mockData = {
  zipCode: "02111",
  maxRating: "4.5",
  noOfRestaurants: 10,
};

const str = `According to yelp reviews zip code 02111 has the best seafood restaurants in Boston with 10 restaurants having an average rating of 4.5`;
const errStr = `There are not enough reviews in yelp to make a conclusive decision`;
describe("Invalid Input", () => {
  test("Input is null", () => {
    console.log = jest.fn();
    report.generateReport(mock);
    expect(console.log.mock.calls[0][0]).toEqual(errStr);
  });

  test("Empty json object", () => {
    console.log = jest.fn();
    report.generateReport(mock);
    expect(console.log.mock.calls[0][0]).toEqual(errStr);
  });
});
describe("Valid Input", () => {
  test("Mock Data", async () => {
    console.log = jest.fn();
    report.generateReport(mockData);
    expect(console.log.mock.calls[0][0]).toEqual(str);
  });
});