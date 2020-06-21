import express from 'express';
require('dotenv').config();

const app = express();
const userRouter = require('./routes/userRouter.js');

app.use(express.json());

app.use('/users', userRouter);

app.use((req, res) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});

