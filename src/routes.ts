import { Router } from "express";

export const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "A linguagem __ é melhor que ___? kkkkk", version: "1.0.0" });
});
