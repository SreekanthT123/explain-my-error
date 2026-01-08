import express from "express";
import { explainError } from "../services/explain.service.js";

const router = express.Router();
router.post("/explain-error", async (req, res) => {
  const { errorText, framework } = req.body;

  if (!errorText || errorText.trim().length === 0) {
    return res.status(400).json({
      error: "Error text is required",
    });
  }

  try {
    const result = await explainError(errorText, framework);
    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: "Could not explain this error. Please try again.",
    });
  }
});

export default router;
