require('dotenv').config()

const express = require('express');
const cors = require('cors');
const { getGroupsInRadius, create } = require('./controllers/groups');
const { getGroupsInRadiusValidations, createGroupValidations } = require('./middlewares/groupsValidations');
const { checkErrorsMiddleware } = require('./middlewares/checkErrors');

const app = express();
app.use(cors());
app.use(express.json());

// Routes

app.get('/', (req, res) => {
    res.status(200).json({ ok: true });
});

app.get('/groups/radius/:radius/:latitude/:longitude', getGroupsInRadiusValidations, checkErrorsMiddleware, getGroupsInRadius);

app.post('/groups', createGroupValidations, checkErrorsMiddleware, create);

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server listening on port', process.env.SERVER_PORT)
});