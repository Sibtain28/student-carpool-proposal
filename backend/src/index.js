import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://student-carpool-proposal.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());
app.use("/auth", authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
