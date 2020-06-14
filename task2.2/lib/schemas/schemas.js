'use strict';

var Joi = require('joi');

exports.userCreateSchema = Joi.object().keys({
  login: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().alphanum().min(5).max(30).regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/).required(),
  age: Joi.number().integer().min(4).max(130).required()
});

exports.userUpdateSchema = Joi.object().keys({
  login: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().alphanum().min(5).max(30).regex(/^(?=.*[a-zA-Z])(?=.*[0-9])/).required(),
  age: Joi.number().integer().min(4).max(130).required(),
  isDeleted: Joi.boolean().required()
});