const api = require("../../api");
require("dotenv").config({ path: "../../env.development" });
const url = process.env.API_URL;
const api_key = process.env.API_KEY;

const dummy_api_key = "skajskajskasjkasjaksja";
test("Successful API call", async () => {
  expect(await api.api_call(url, api_key)).not.toBe({});
});

test("API call with incorrect API key", async () => {
  expect(await api.api_call(url, dummy_api_key)).toStrictEqual({});
});
