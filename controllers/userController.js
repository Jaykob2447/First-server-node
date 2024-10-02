const { USERS } = require("../Model/users");

module.exports.createUser = (req, res) => {
  const { body } = req;

  USERS.push({ ...body, id: String(USERS.length) });

  res.status(201).send(USERS);
  // навмисно повернув усіх щоб переконатись у створенні
};

module.exports.hello = (req, res) => {
  res.status(200).send("Hello");
};

module.exports.getAllUsers = (req, res) => {
  res.status(200).send(USERS);
};

module.exports.getUserById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const foundUser = USERS.findIndex((u) => u.id === id);

  console.log(foundUser);
  if (foundUser === -1) {
    return res.status(404).send("User not found");
  }

  res.status(200).send(USERS[foundUser]);
};
