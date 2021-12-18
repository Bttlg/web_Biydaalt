const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const Users = require("./models/Users");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS);

const UsersData = JSON.parse(
  fs.readFileSync(__dirname + "/data/users.json", "utf-8")
);

const importData = async () => {
  try {
    await Users.create(UsersData);
    console.log("Өгөгдлийг импортлолоо....".green.inverse);
  } catch (err) {
    console.log(err.red.inverse);
  }
};

const deleteData = async () => {
  try {
    await Users.deleteMany();
    console.log("Өгөгдлийг устгалаа....".red.inverse);
  } catch (err) {
    console.log(err.red.inverse);
  }
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
