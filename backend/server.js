const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const rfs = require("rotating-file-stream");
const path = require("path");
const routesUrls = require("./routes/users");
//Router оруулж ирэх
const usersRoutes = require("./routes/users");
const cors = require("cors");
const colors = require("colors");
const logger = require("./middleware/logger");
const morgan = require("morgan");

const app = express();

dotenv.config();

//Create a write stream
var accessLogStream = rfs.createStream(path.join("access.log"), {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));

mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log(
    `mongoDB холбогдлоо : ${mongoose.connection.host}`.cyan.underline.bold
  );
});

app.use(express.json());
// app.use(cors());
app.use("/api/users", usersRoutes);

app.listen(process.env.PORT, () =>
  console.log(
    `Express сервер ${process.env.PORT} дээр аслаа`.gray.underline.bold
  )
);
