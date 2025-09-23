import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

app.post("/", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return res.status(200).json({ success: true, message: "SUCCESS!" });
  }

  res.status(400).json({ success: false, message: "Invalid Credentials" });
});

export default app;
