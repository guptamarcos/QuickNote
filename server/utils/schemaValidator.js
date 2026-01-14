const Joi = require("joi");

const signupValidate = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),

}).options({allowUnknown: false});

const taskValidate = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    content: Joi.string().required(),
    tags: Joi.array().items(Joi.string().trim()).optional(),
    isPinned: Joi.boolean().optional(),
}).options({allowUnknown: false});

module.exports = {signupValidate,taskValidate};
