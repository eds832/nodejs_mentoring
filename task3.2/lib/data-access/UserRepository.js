

const _createClass = (function () {
    function defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
        }
    } return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
    };
}());

const _index = require('../models/index.js');

const _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    } return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

const _require = require('sequelize');
const Op = _require.Op;

module.exports = (function () {
    function UserReposistory() {
        _classCallCheck(this, UserReposistory);
    }

    _createClass(UserReposistory, null, [{
        key: 'saveUser',
        value: async function saveUser(newUser) {
            try {
                return await _index2.default.User.create(newUser);
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'getUser',
        value: async function getUser(id) {
            try {
                return await _index2.default.User.findOne({ where: { id, isDeleted: false } });
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'getAutoSuggestUsers',
        value: async function getAutoSuggestUsers(loginSubstring, limit) {
            try {
                return await _index2.default.User.findAll({ where: { isDeleted: false, login: _defineProperty({}, Op.iLike, `%${  loginSubstring  }%`) }, order: [['login', 'ASC']], limit });
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'getAllUsers',
        value: async function getAllUsers() {
            try {
                return await _index2.default.User.findAll({ where: { isDeleted: false } });
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'updateUser',
        value: async function updateUser(id, _updateUser) {
            try {
                const userToUpdate = await _index2.default.User.findOne({ where: { id } });
                if (userToUpdate) {
                    const result = await _index2.default.User.update(_updateUser, { where: { id } });
                    if (result > 0) {
                        return _updateUser;
                    }
                }
                return null;
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'removeUser',
        value: async function removeUser(id) {
            try {
                let toRemove = await _index2.default.User.findOne({ where: { id } });
                if (toRemove) {
                    toRemove = { id: toRemove.id, login: toRemove.login, password: toRemove.password, age: toRemove.age, isDeleted: true };
                    const result = await _index2.default.User.update(toRemove, { where: { id } });
                    if (result > 0) {
                        return toRemove;
                    }
                }
                return null;
            } catch (error) {
                throw error;
            }
        }
    }]);

    return UserReposistory;
}());
