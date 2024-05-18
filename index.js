import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tasks from "./routes/task.js";
import connectDb from "./db/connect.js";
dotenv.config();
const mongoUrl = process.env.MONGO_URI;
const port = process.env.PORT;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});

connectDb(mongoUrl);
