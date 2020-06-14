"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var users = [];

module.exports = function () {
	function User(id, login, password, age, isDeleted) {
		_classCallCheck(this, User);

		this.id = id;
		this.login = login;
		this.password = password;
		this.age = age;
		this.isDeleted = isDeleted;
	}

	_createClass(User, [{
		key: "save",
		value: function save() {
			users.push(this);
		}
	}], [{
		key: "getUser",
		value: function getUser(id) {
			var user = null;
			for (var i = 0; i < users.length; i++) {
				if (users[i].id == id) {
					if (!users[i].isDeleted) {
						user = users[i];
					}
					break;
				}
			}
			return user;
		}
	}, {
		key: "updateUser",
		value: function updateUser(user) {
			var updatedUser = null;
			if (user && user.id) {
				for (var i = 0; i < users.length; i++) {
					if (users[i].id == user.id) {
						users[i] = user;
						updatedUser = users[i];
						break;
					}
				}
			}
			return updatedUser;
		}
	}, {
		key: "getAutoSuggestUsers",
		value: function getAutoSuggestUsers(loginSubstring, limit) {
			var autoSuggestUsers = [];
			for (var i = 0; i < users.length && autoSuggestUsers.length != limit; i++) {
				if (users[i].login.indexOf(loginSubstring) > -1 && !users[i].isDeleted) {
					autoSuggestUsers.push(users[i]);
				}
			}
			autoSuggestUsers.sort(function (u1, u2) {
				return u1.login.localeCompare(u2.login);
			});
			return autoSuggestUsers;
		}
	}, {
		key: "getAll",
		value: function getAll() {
			var existingUsers = [];
			users.forEach(function (u) {
				if (!u.isDeleted) {
					existingUsers.push(u);
				}
			});
			return existingUsers;
		}
	}, {
		key: "removeUser",
		value: function removeUser(id) {
			var user = null;
			for (var i = 0; i < users.length; i++) {
				if (users[i].id == id && !users[i].isDeleted) {
					users[i].isDeleted = true;
					user = users[i];
					break;
				}
			}
			return user;
		}
	}]);

	return User;
}();