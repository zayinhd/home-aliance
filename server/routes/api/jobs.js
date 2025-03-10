import express from "express";
const router = express.Router();

router.get("/:job", getJob);

export default router;
