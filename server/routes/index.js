import express from "express";
import apiRoutes from "./api/index.js";

const router = express.Router();

router.use("/api/:username", apiRoutes);

export default router;
