const express = require("express");
const { connection } = require("./db");
const { jobRoute } = require("./route/Job.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/jobs", jobRoute);

app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    } catch (error) {
        console.log("Something went wrong");
    }
    console.log("Server is runningg...");
});
