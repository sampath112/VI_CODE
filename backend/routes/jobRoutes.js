// const express = require("express");
// const Job = require("../models/JobModel");
// const authMiddleware = require("../middleware/auth"); // Ensure admin authentication
// const router = express.Router();

// // GET All Jobs (Public)
// router.get("/", async (req, res) => {
//     try {
//         const jobs = await Job.find();
//         res.json(jobs);
//     } catch (error) {
//         res.status(500).json({ error: "Server error fetching jobs" });
//     }
// });

// // POST Job (Only Admin)
// router.post("/", authMiddleware, async (req, res) => {
//     try {
//         const { title, description, location } = req.body;

//         if (!title || !description || !location) {
//             return res.status(400).json({ error: "All fields are required" });
//         }

//         const job = new Job({ title, description, location });
//         await job.save();
//         res.status(201).json({ message: "Job posted successfully" });
//     } catch (error) {
//         res.status(500).json({ error: "Error posting job" });
//     }
// });
// router.delete("/api/jobs/:id", async (req, res) => {
//     try {
//         const job = await Job.findByIdAndDelete(req.params.id);

//         if (!job) {
//             return res.status(404).json({ error: "Job not found" });
//         }

//         res.json({ message: "Job deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting job:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });

// module.exports = router;



const express = require("express");
const Job = require("../models/JobModel");
const authMiddleware = require("../middleware/auth"); // Ensure admin authentication
const router = express.Router();

// POST: Create a new job
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { 
            title, description, location, company, jobType, salary, 
            deadline, requirements, experience, applicationLink, contactEmail, skills 
        } = req.body;

        if (!title || !description || !location || !company || !jobType || !salary || !deadline || !requirements || !experience || !applicationLink || !contactEmail || !skills) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newJob = new Job({ 
            title, description, location, company, jobType, salary, 
            deadline, requirements, experience, applicationLink, contactEmail, skills,
            createdAt: new Date() 
        });

        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        console.error("Error creating job:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// GET: Fetch all jobs
router.get("/", async (req, res) => {
    try {
        const jobs = await Job.find().sort({ createdAt: -1 });
        res.status(200).json(jobs);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// GET: Fetch a single job by ID
router.get("/:id", async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json(job);
    } catch (error) {
        console.error("Error fetching job:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// PUT: Update a job by ID (Admin Only)
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedJob) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json(updatedJob);
    } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// DELETE: Remove a job by ID (Admin Only)
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;

