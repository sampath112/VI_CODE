const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    company: { type: String, required: true },
    jobType: { type: String, required: true },
    salary: { type: String, required: true },
    deadline: { type: Date, required: true },
    requirements: { type: String, required: true },
    experience: { type: String, required: true },
    applicationLink: { type: String, required: true },
    contactEmail: { type: String, required: true },
    skills: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", jobSchema);
