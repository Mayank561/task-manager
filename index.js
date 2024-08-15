const express = require("express");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const dotenv = require("dotenv");
const connectDb = require("./config/Db");

dotenv.config();
connectDb();

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
