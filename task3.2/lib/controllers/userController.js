

const _createClass = (function () {
    function defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
        }
    } return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
    };
}());

const _UserService = require('../services/UserService');

const _UserService2 = _interopRequireDefault(_UserService);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

const uuid = require('uuid');

const bad = 'Unfortunately, something went a wrong way... Bad luck. Try one more time.';

module.exports = (function () {
    function UserController() {
        _classCallCheck(this, UserController);
    }

    _createClass(UserController, null, [{
        key: 'saveUser',
        value: async function saveUser(request, response) {
            const userId = uuid.v4();
            const userLogin = request.body.login;
            const userPassword = request.body.password;
            const userAge = request.body.age;
            const isUserDeleted = false;
            try {
                const user = await _UserService2.default.saveUser({ id: userId, login: userLogin, password: userPassword, age: userAge, isDeleted: isUserDeleted });
                response.status(201).location(`/users/${  user.id}`).send(user);
            } catch (err) {
                console.log(err);
                response.status(500).send(bad);
            }
        }
    }, {
        key: 'getUser',
        value: async function getUser(request, response) {
            const id = request.params.id;
            try {
                const user = await _UserService2.default.getUser(id);
                if (user) {
                    response.send(user);
                } else {
                    response.status(404).send();
                }
            } catch (err) {
                console.log(err);
                response.status(500).send(bad);
            }
        }
    }, {
        key: 'updateUser',
        value: async function updateUser(request, response) {
            const userId = request.params.id;
            const userLogin = request.body.login;
            const userPassword = request.body.password;
            const userAge = request.body.age;
            const isUserDeleted = request.body.isDeleted;
            try {
                const user = await _UserService2.default.updateUser(userId, { id: userId, login: userLogin, password: userPassword, age: userAge, isDeleted: isUserDeleted });
                if (user) {
                    response.send(user);
                } else {
                    response.status(404).send();
                }
            } catch (err) {
                console.log(err);
                response.status(500).send(bad);
            }
        }
    }, {
        key: 'getUsers',
        value: async function getUsers(request, response) {
            const loginSubstring = String(request.body.loginSubstring);
            const limit = parseInt(request.body.limit, 10);
            try {
                if (loginSubstring && limit && limit >= 0) {
                    response.send((await _UserService2.default.getAutoSuggestUsers(loginSubstring, limit)));
                } else {
                    response.send((await _UserService2.default.getAllUsers()));
                }
            } catch (err) {
                console.log(err);
                response.status(500).send(bad);
            }
        }
    }, {
        key: 'removeUser',
        value: async function removeUser(request, response) {
            const id = request.params.id;
            try {
                const user = await _UserService2.default.removeUser(id);
                if (user) {
                    response.send(user);
                } else {
                    response.status(404).send();
                }
            } catch (err) {
                console.log(err);
                response.status(500).send(bad);
            }
        }
    }]);

    return UserController;
}());
