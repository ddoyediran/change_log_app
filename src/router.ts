import { Router } from "express";
import { body, validationResult } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProduct,
  updateProduct,
} from "./handlers/product";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

// Product routes
router.get("/product", getProduct);

router.get("/product/:id", getOneProduct);

router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
);

router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
);

router.delete("/product/:id", deleteProduct);

// Update routes
router.get("/update", () => {});

router.get("/update/:id", () => {});

router.post(
  "/update",
  body("title").isString().optional(),
  body("body").isString().optional(),
  handleInputErrors,
  (req, res) => {}
);

router.put(
  "/update/:id",
  body("title").isString().optional(),
  body("body").isString().optional(),
  body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
  body("version").optional(),
  body("asset").optional(),
  handleInputErrors,
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
  handleInputErrors,
  (req, res) => {}
);

router.put(
  "/updatepoint/:id",
  body("name").isString(),
  body("description").isString(),
  handleInputErrors,
  (req, res) => {}
);
router.delete("/updatepoint/:id", () => {});

export default router;
