const Joi = require("joi");

const signupValidate = Joi.object({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),

}).options({allowUnknown: false});

const taskValidate = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string().trim()),
}).options({allowUnknown: false});

module.exports = {signupValidate,taskValidate};
