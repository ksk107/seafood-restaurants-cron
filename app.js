/**
 * Cron Job which generate a report of the top 10 sea food restaurants in Boston
 * This runs every 5 seconds. The data is fetched from Redis, if unavailable
 * then the data is then fetched from yelp business search api
 *
 */
 const api = require("./api");
 const db = require("./db");
 const report = require("./report");
 const cron = require("node-cron");
 require("dotenv").config({ path: "./env.development" });
 const url = process.env.API_URL;
 const api_key = process.env.API_KEY;
 
 const app = async () => {
   const val = await db.getResponse();
   let result = {};
 
   if (!val) {
     result = await api.api_call(url, api_key);
     report.generateReport(result);
     await db.setResponse(result);
   } else {
     report.generateReport(JSON.parse(val));
   }
 };
 
 cron.schedule("*/5 * * * * *", async () => {
   await app();
 });