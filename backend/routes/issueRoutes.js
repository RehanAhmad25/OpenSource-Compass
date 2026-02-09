import express from "express";
import { analyzeIssue } from "../controllers/issueController.js";

const router = express.Router();

router.post("/analyze", analyzeIssue);
import { validateIssue } from "../controllers/issueController.js";

const router = express.Router();

router.post("/validate", validateIssue);

export default router;
