

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

require('dotenv').config();

const app = (0, _express2.default)();
const userRouter = require('./routes/userRouter.js');

app.use(_express2.default.json());

app.use('/users', userRouter);

app.use((req, res) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on PORT ${  port}`);
});
