const path = require("path");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const dogRouter = require("./routes/dogRouter");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.use(cors());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(morgan("dev"));

// ROuTES
app.use("/", viewRouter);
app.use("/api/v1/getImage", dogRouter);

module.exports = app;
