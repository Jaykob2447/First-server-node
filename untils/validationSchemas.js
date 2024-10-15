const yup = require("yup");

module.exports.CREATE_USER_VALIDATION_SCHEMA = yup.object({
  firstName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z][a-z]{1,15}$/)
    .required(),
  lastName: yup
    .string()
    .trim()
    .min(2)
    .max(32)
    .matches(/^[A-Z][a-z]{1,15}$/),
  nickName: yup.string().trim().min(2).max(32).required(),
});
