

const _createClass = (function () {
    function defineProperties(target, props) {
        for (let i = 0; i < props.length; i++) {
            const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor);
        }
    } return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor;
    };
}());

const _UserRepository = require('../data-access/UserRepository.js');

const _UserRepository2 = _interopRequireDefault(_UserRepository);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

module.exports = (function () {
    function UserService() {
        _classCallCheck(this, UserService);
    }

    _createClass(UserService, null, [{
        key: 'saveUser',
        value: async function saveUser(newUser) {
            try {
                return await _UserRepository2.default.saveUser(newUser);
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'getUser',
        value: async function getUser(id) {
            try {
                return await _UserRepository2.default.getUser(id);
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'getAutoSuggestUsers',
        value: async function getAutoSuggestUsers(loginSubstring, limit) {
            try {
                return await _UserRepository2.default.getAutoSuggestUsers(loginSubstring, limit);
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'getAllUsers',
        value: async function getAllUsers() {
            try {
                return await _UserRepository2.default.getAllUsers();
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'updateUser',
        value: async function updateUser(id, _updateUser) {
            try {
                return await _UserRepository2.default.updateUser(id, _updateUser);
            } catch (error) {
                throw error;
            }
        }
    }, {
        key: 'removeUser',
        value: async function removeUser(id) {
            try {
                return await _UserRepository2.default.removeUser(id);
            } catch (error) {
                throw error;
            }
        }
    }]);

    return UserService;
}());
