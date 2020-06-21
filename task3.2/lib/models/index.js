

const _fs = require('fs');

const _fs2 = _interopRequireDefault(_fs);

const _path = require('path');

const _path2 = _interopRequireDefault(_path);

const _sequelize = require('sequelize');

const _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const basename = _path2.default.basename(__filename);
const database = {};

console.log(`start DB: ${  process.env.DB_NAME}`);

const sequelize = new _sequelize2.default(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    },
    dialectOption: {
        ssl: true,
        native: true
    },
    logging: true,
    define: {
        timestamps: false
    }
});

_fs2.default.readdirSync(__dirname).filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach((file) => {
    const model = sequelize.import(_path2.default.join(__dirname, file));
    database[model.name] = model;
});

Object.keys(database).forEach((modelName) => {
    if (database[modelName].associate) {
        database[modelName].associate(database);
    }
});

database.sequelize = sequelize;
database.Sequelize = _sequelize2.default;

module.exports = database;
