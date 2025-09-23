import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const PORT = 5000;

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const PROCESS = process.env.PROCESS;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    if(username == ADMIN_USERNAME && password == ADMIN_PASSWORD) {
        res.status(200).json({success: true, message: "SUCCESS!"});
        return;
    }
    res.status(400).json({success: false, message: "Invalid Credentials, please contact admin"});
})

if(PROCESS == "dev") {
    app.listen(PORT, () => {
        console.log(`Server is currently listening to port ${PORT}`);
    })
}

export default app;