const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();



// middleware

app.use(express.json());
app.use(cors());
app.use(cookieParser());


// config with  dotenv
dotenv.config({ path: "./config/config.env" });



module.exports = app;