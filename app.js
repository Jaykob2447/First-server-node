const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  hello,
} = require("./controllers/userController");

const app = express();
app.use(express.json());

app.get("/", hello);
app.post("/users", createUser);
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);

module.exports = app;
