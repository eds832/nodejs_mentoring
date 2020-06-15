const express = require('express');
const userController = require('../controllers/userController.js');
const userRouter = express.Router();
const schemas = require('../schemas/schemas.js');
const validator = require('../schemas/validator.js');

userRouter.post('/', validator.validateSchema(schemas.userCreateSchema), userController.saveUser);
userRouter.get('/:id', userController.getUser);
userRouter.get('/', userController.getUsers);
userRouter.put('/:id', validator.validateSchema(schemas.userUpdateSchema), userController.updateUser);
userRouter.delete('/:id', userController.removeUser);

module.exports = userRouter;
