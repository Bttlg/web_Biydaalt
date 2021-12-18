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
const errorHandler = require("./middleware/error");

const app = express();

//Аппын тохиргоог process.env-руу ачаалах
dotenv.config();

//Create a write stream
var accessLogStream = rfs.createStream(path.join("access.log"), {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

//mongoDB-тэй холбох
mongoose.connect(process.env.DATABASE_ACCESS, () => {
  console.log(
    `mongoDB холбогдлоо : ${mongoose.connection.host}`.cyan.underline.bold
  );
});

app.use(express.json());
app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors());
app.use("/api/users", usersRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(
    `Express сервер ${process.env.PORT} дээр аслаа`.gray.underline.bold
  )
);
