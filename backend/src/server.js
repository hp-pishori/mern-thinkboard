import express from "express";
import noteRoutes from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
// middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(express.json());

app.use("/api/notes", noteRoutes);
connectDB();
app.listen(PORT, () => {
  console.log("server started on port:", PORT);
});
