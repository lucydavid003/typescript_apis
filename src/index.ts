import express from "express";
import tasksRouter from "./routes/tasks.route";
import {
  getAllTasks,
  findbyId,
  createTask,
  deleteTask,
  updateTask,
} from "./controllers/tasks.controller";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());

app.use("/tasks", tasksRouter);

app.get("/", async (_req, res) => {
  res.send("<h1>Tasks APIs</h1>");
});

app.get("/tasks", getAllTasks);
app.get("/tasks/:id", findbyId);
app.post("/tasks/", createTask);
app.delete("/tasks/:id", deleteTask);
app.put("/tasks/:id", updateTask);
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`App running on port   ${port}`));
