const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
const schemas = require("../schemas/schemas.js");
 
userRouter.post("/", validateSchema(schemas.userCreateSchema), userController.saveUser);
userRouter.get("/:id", userController.getUser);
userRouter.get("/", userController.getUsers);
userRouter.put("/:id", validateSchema(schemas.userUpdateSchema), userController.updateUser);
userRouter.delete("/:id", userController.removeUser);

function errorResponse(schemaErrors) {
	const errors = schemaErrors.map((error) => {
		let { path, message } = error;
		return { path, message };
	});
	return {
		status: 'failed',
		errors
	}
}

function validateSchema(schema) {
	return (req, res, next) => {
		const { error } = schema.validate(req.body, {
			abortEarly: false,
			allowUnknown: false
		});
		if(error && error.isJoi) {
			res.status(400).json(errorResponse(error.details));
		} else {
			next();
		}
	}
}
 
module.exports = userRouter;