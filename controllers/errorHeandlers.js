const { ValidationError } = require("yup");

module.exports.validationErrorHeandlers = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(422).send(error.errors);
  }
  next(error);
};
module.exports.errorHeandlers = (error, req, res, next) => {
  if (res.headersSent) {
    return;
  }

  const status = error.status ?? "500";
  const massage = error.massage ?? "Server Error";

  res.status(status).send(massage);
};
