"use strict";

var User = require("../models/user.js");
var uuid = require('uuid');

exports.saveUser = function (request, response) {
    var id = uuid.v4();
    var login = request.body.login;
    var password = request.body.password;
    var age = request.body.age;
    var isDeleted = false;
    var user = new User(id, login, password, age, isDeleted);
    user.save();
    response.send(user);
};

exports.getUser = function (request, response) {
    var id = request.params.id;
    var user = User.getUser(id);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};

exports.updateUser = function (request, response) {
    var id = request.params.id;
    var login = request.body.login;
    var password = request.body.password;
    var age = request.body.age;
    var isDeleted = request.body.isDeleted;
    var user = new User(id, login, password, age, isDeleted);
    user = User.updateUser(user);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};

exports.getUsers = function (request, response) {
    var loginSubstring = String(request.body.loginSubstring);
    var limit = parseInt(request.body.limit);
    if (loginSubstring && limit && limit >= 0) {
        response.send(User.getAutoSuggestUsers(loginSubstring, limit));
    } else {
        response.send(User.getAll());
    }
};

exports.removeUser = function (request, response) {
    var id = request.params.id;
    var user = User.removeUser(id);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};