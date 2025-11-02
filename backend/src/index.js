import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    console.log("Origin -->", origin); 
    callback(null, true);
  },
  credentials: true
}));


app.use(express.json());

app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
