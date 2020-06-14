"use strict";

var express = require("express");
var userController = require("../controllers/userController.js");
var userRouter = express.Router();
var schemas = require("../schemas/schemas.js");

userRouter.post("/", validateSchema(schemas.userCreateSchema), userController.saveUser);
userRouter.get("/:id", userController.getUser);
userRouter.get("/", userController.getUsers);
userRouter.put("/:id", validateSchema(schemas.userUpdateSchema), userController.updateUser);
userRouter.delete("/:id", userController.removeUser);

function errorResponse(schemaErrors) {
	var errors = schemaErrors.map(function (error) {
		var path = error.path,
		    message = error.message;

		return { path: path, message: message };
	});
	return {
		status: 'failed',
		errors: errors
	};
}

function validateSchema(schema) {
	return function (req, res, next) {
		var _schema$validate = schema.validate(req.body, {
			abortEarly: false,
			allowUnknown: false
		}),
		    error = _schema$validate.error;

		if (error && error.isJoi) {
			res.status(400).json(errorResponse(error.details));
		} else {
			next();
		}
	};
}

module.exports = userRouter;