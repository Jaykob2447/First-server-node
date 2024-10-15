const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  hello,
} = require("./controllers/userController");
const {
  errorHeandlers,
  validationErrorHeandlers,
} = require("./controllers/errorHeandlers");
const { validationUser } = require("./controllers/MWvalidation/validationUser");

const app = express();
app.use(express.json());

app.get("/", hello);
app.post("/users", validationUser, createUser);
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);

app.use(validationErrorHeandlers, errorHeandlers);
module.exports = app;
