const express = require("express")
const cors = require("cors")
const {DBConnect} = require("./DBConnect")
const dotenv = require("dotenv")

dotenv.config();

const DB_URL = process.env.MONGO_URL;

const authRoutes = require("./routes/auth")
const stockRoutes = require("./routes/stocks");
const app = express();
require("dotenv").config();

app.use(cors())
app.use(express.json());

DBConnect(DB_URL)

app.use("/api/auth",authRoutes)
app.use("/api/stock",stockRoutes)



app.listen(5000,console.log("server starts at ",process.env.PORT))






