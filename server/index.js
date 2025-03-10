import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";
import auth from "./routes/auth.js";
import signup from "./routes/signup.js";
import logout from "./routes/logout.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/auth", auth);
app.use("/signup", signup);
app.use("/logout", logout);

// Protected routes
app.use(verify);
app.use("/", routes);

//Other routes
app.all("*", (req, res) => {
    res.status(404).json({ error: "API route not found" });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
