import express from "express";
import job from "./jobs.js";
const router = express.Router();

router.use("/jobs", job);
// router.use("/:search", );

export default router;
