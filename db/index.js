const asyncRedis = require("async-redis");
require("dotenv").config({ path: "./env.development" });
const client = asyncRedis.createClient(
  process.env.DB_PORT,
  process.env.DB_HOST
);

client.on("error", function (error) {
  console.log("Unable to connect to Redis");
  return;
});
/**
 * getResponse
 * @return {Promise<val>} val containing data stored in Redis
 */
const getResponse = async () => {
  const val = await client.get("data");
  return val;
};

/**
 * setResponse: Store api response data in Redis
 * @param {object} data
 * @return {Promise<>}
 */
const setResponse = async (data) => {
  await client.setex("data", 60, JSON.stringify(data));
};

module.exports = { getResponse, setResponse };