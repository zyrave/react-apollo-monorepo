const yup = require('yup');

const createBookSchema = yup.object().shape({
  title: yup
    .string()
    .required()
    .min(5)
    .max(30),
  pages: yup
    .number()
    .required()
    .positive()
    .integer(),
  author: yup.string().nullable(),
});

module.exports = { createBookSchema };
