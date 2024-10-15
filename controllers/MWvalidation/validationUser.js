const {
  CREATE_USER_VALIDATION_SCHEMA,
} = require("../../untils/validationSchemas");

module.exports.validationUser = async (req, res, next) => {
  const { body } = req;
  try {
    const validatetUser = await CREATE_USER_VALIDATION_SCHEMA.validate(body);
    req.body = validatetUser;
    next();
  } catch (err) {
    next(err);
  }
};
