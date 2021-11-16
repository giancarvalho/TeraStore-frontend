import joi from 'joi';

const userSchema = joi.object({
  name: joi.string().min(3).required(),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi.string().min(6).required(),
  cpf: joi.string().length(11).required(),
});

export default userSchema;
