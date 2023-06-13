const express = require("express");
const { connection } = require("./db");
const { jobRoute } = require("./route/Job.route");

const app = express();
app.use(express.json());
app.use("/jobs", jobRoute);

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connected to DB")
    } catch (error) {
        console.log("Something went wrong");
    }
    console.log("Server is runningg...");
});
