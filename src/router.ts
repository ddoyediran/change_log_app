import { Router } from "express";
import { body, validationResult } from "express-validator";
import { inputValidation } from "./modules/validationMiddleware";

const router = Router();

// Product routes
router.get("/product", (req, res) => {
  res.json({ message: "Working for product!" });
});

router.get("/product/:id", () => {});

router.post(
  "/product",
  body("name").isString(),
  inputValidation,
  (req, res) => {}
);

router.put(
  "/product/:id",
  body("name").isString(),
  inputValidation,
  (req, res) => {}
);

router.delete("/product/:id", () => {});

// Update routes
router.get("/update", () => {});

router.get("/update/:id", () => {});

router.post(
  "/update",
  body("title").isString().optional(),
  body("body").isString().optional(),
  inputValidation,
  (req, res) => {}
);

router.put(
  "/update/:id",
  body("title").isString().optional(),
  body("body").isString().optional(),
  body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
  body("version").optional(),
  body("asset").optional(),
  inputValidation,
  (req, res) => {}
);

router.delete("/update/:id", () => {});

// Update Point routes
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});

router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  inputValidation,
  (req, res) => {}
);

router.put(
  "/updatepoint/:id",
  body("name").isString(),
  body("description").isString(),
  inputValidation,
  (req, res) => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
