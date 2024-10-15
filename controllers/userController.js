const createError = require("http-errors");
const { USERS } = require("../Model/users");

module.exports.createUser = (req, res, next) => {
  const { body } = req;

  USERS.push({ ...body, id: String(USERS.length) });

  res.status(201).send(USERS);
  // навмисно повернув усіх щоб переконатись у створенні
};

module.exports.hello = (req, res, next) => {
  res.status(200).send("Hello");
};

module.exports.getAllUsers = (req, res, next) => {
  res.status(200).send(USERS);
};

module.exports.getUserById = (req, res, next) => {
  const { id } = req.params;
  const foundUser = USERS.findIndex((u) => u.id === id);

  if (foundUser === -1) {
    return next(createError(404, "User Not Found"));
  }

  res.status(200).send(USERS[foundUser]);
};
