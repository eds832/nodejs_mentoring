const express = require('express');
const userController = require('../controllers/userController.js');
const userRouter = express.Router();

userRouter.post('/', userController.saveUser);
userRouter.get('/:id', userController.getUser);
userRouter.get('/', userController.getUsers);
userRouter.put('/:id', userController.updateUser);
userRouter.delete('/:id', userController.removeUser);

module.exports = userRouter;
