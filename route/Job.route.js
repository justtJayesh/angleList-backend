const { Router } = require("express");
const { JobModel } = require("../model/Job.model");

const jobRoute = Router();

jobRoute.get("/", async (req, res) => {
    try {
        const jobs = await JobModel.find();
        res.status(200).send(jobs);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

jobRoute.post("/create", async (req, res) => {
    try {
        const job = new JobModel(req.body);
        await job.save();
        res.status(200).send({ msg: "Job has been posted" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

jobRoute.patch("/update/:jobID", async (req, res) => {
    const { jobID } = req.params;
    try {
        await JobModel.findByIdAndUpdate({ _id: jobID }, req.body);
        res.status(200).send({ msg: `Job with ${jobID} has been updated.` });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

jobRoute.delete("/delete/:jobID", async (req, res) => {
    const { jobID } = req.params;
    try {
        await JobModel.findByIdAndDelete({ _id: jobID });
        res.status(200).send({ msg: `Job with ${jobID} has been deleted.` });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = { jobRoute };
