const users = [];
 
module.exports = class User{
 
    constructor(id, login, password, age, isDeleted){
		this.id = id;
		this.login = login;
		this.password = password;
        this.age = age;
		this.isDeleted = isDeleted;
    }
	
    save(){
        users.push(this);
    }
	
	static getUser(id){
		let user = null;
		for(let i = 0; i < users.length; i++){
			if(users[i].id == id){
				if(!users[i].isDeleted) {
					user = users[i];
				}
				break;
			}
		}
		return user;
	}
	
	static updateUser(user){
		let updatedUser = null;
		if(user && user.id){
			for(let i = 0; i < users.length; i++){
				if(users[i].id == user.id){
					users[i] = user;
					updatedUser = users[i];
					break;
				}
			}
		}
		return updatedUser;
	}
	
	static getAutoSuggestUsers(loginSubstring, limit){
		const autoSuggestUsers = [];
		for(let i = 0; i < users.length && autoSuggestUsers.length != limit; i++){
			if(users[i].login.indexOf(loginSubstring) > -1 && !users[i].isDeleted){
				autoSuggestUsers.push(users[i]);
			}
		}
		autoSuggestUsers.sort((u1, u2) => u1.login.localeCompare(u2.login))
		return autoSuggestUsers;
	}
	
    static getAll(){
		const existingUsers = [];
		users.forEach(u => { if(!u.isDeleted) { existingUsers.push(u);}});
        return existingUsers;
    }
	
	static removeUser(id){
		let user = null;
		for(let i = 0; i < users.length; i++){
			if(users[i].id == id && !users[i].isDeleted){
				users[i].isDeleted = true;
				user = users[i];
				break;
			}
		}
		return user;
	}
}