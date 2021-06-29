const db = require("../../db");

const dummy = { data: "value" };

test("Get call when value is not in Redis", async () => {
  expect(await db.getResponse()).toBe(null);
});

test("Get call after value is set in Redis", async () => {
  await db.setResponse(dummy);
  expect(await db.getResponse()).toStrictEqual(JSON.stringify(dummy));
});
