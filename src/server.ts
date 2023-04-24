import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import { protect } from "./modules/auth";
import { signIn, createNewUser } from "./handlers/user";

const app = express();

/**
 * @description: Middleware
 */
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Change log api" });
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signIn);

app.use((err, req, res, next) => {
  if (err.type === "auth") {
    res.status(401).json({ message: "unauthorized!" });
  } else if (err.type === "input") {
    res.status(400).json({ message: "invalid input!" });
  } else {
    res.status(500).json({ message: "Oops, that is in us!" });
  }
});

export default app;
