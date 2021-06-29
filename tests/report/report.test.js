const report = require("../../report");

const mock = null;
const mockData = {
  data: [{ name: "New Deal Fish Market" }, { name: "Atlantic Fish Company" }],
};

const str = `Below is the list of top 10 seafood restaurants in Boston`;
describe("Invalid Input", () => {
  test("Input is null", () => {
    // TODO: test something that should not log
    console.log = jest.fn();
    report.generateReport(mock);
    expect(console.log).not.toHaveBeenCalled();
  });

  test("Empty json object", () => {
    // TODO: test something that should not log
    console.log = jest.fn();
    report.generateReport(mock);
    expect(console.log).not.toHaveBeenCalled();
  });
});
describe("Valid Input", () => {
  test("Mock Data", async () => {
    console.log = jest.fn();
    report.generateReport(mockData);
    expect(console.log.mock.calls[0][0]).toEqual(str);
  });
});