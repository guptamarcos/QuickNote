const Joi = require("joi");

const signupValidate = Joi.object({
    username: Joi.string().min(3).max(10).required(),
    email: Joi.string().required(),
    password: Joi.string().required(),

});

const cardValidate = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    content: Joi.string().required(),
    isPinned: Joi.boolean().required(),
});

module.exports = {signupValidate,cardValidate};
