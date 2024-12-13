import Joi from 'joi';

export const registerSchema = Joi.object({
  email: Joi.string()
    .min(6)
    .max(60)
    .required()
    .email({
      tlds: { allow: ['com', 'net'] },
    }),
  password: Joi.string()
    .required()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')),
  username: Joi.string().required(),  
});



// Login Validation Schema
export const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .email({
      tlds: { allow: ['com', 'net'] }, // Allow specific TLDs (optional, modify as needed)
    })
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),
  password: Joi.string()
    .required()
    .min(8)
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 8 characters long',
    }),
});