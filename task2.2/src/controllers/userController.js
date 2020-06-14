const User = require("../models/user.js");
const uuid = require('uuid');

exports.saveUser= function(request, response){
    const id = uuid.v4();	
    const login = request.body.login;
    const password = request.body.password;
    const age = request.body.age;
    const isDeleted = false;
    const user = new User(id, login, password, age, isDeleted);	
    user.save();
    response.status(201).location(`/users/${user.id}`).send(user);
};
 
exports.getUser = function(request, response){
	const id = request.params.id;
	const user = User.getUser(id);
    if(user){
        response.send(user);
    }
    else{
        response.status(404).send();
    }
};

exports.updateUser = function(request, response){
	const id = request.params.id;	
    const login = request.body.login;
    const password = request.body.password;
    const age = request.body.age;
    const isDeleted = request.body.isDeleted;
	let user = new User(id, login, password, age, isDeleted);
	user = User.updateUser(user);
    if(user){
        response.send(user);
    }
    else{
        response.status(404).send();
    }
};

exports.getUsers = function(request, response){
	const loginSubstring = String(request.body.loginSubstring);
    const limit = parseInt(request.body.limit);
	if(loginSubstring && limit && limit >= 0){
		response.send(User.getAutoSuggestUsers(loginSubstring, limit));
	} else {		
		response.send(User.getAll());
	}
};

exports.removeUser = function(request, response){
	const id = request.params.id;
	const user = User.removeUser(id);
    if(user){
        response.send(user);
    }
    else{
        response.status(404).send();
    }
};