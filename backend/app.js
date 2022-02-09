require('dotenv').config()

const express = require('express');
const app = express();
const { getGroupsInRadius, create } = require('./controllers/groups')
const { 
    getGroupsInRadiusValidations, getGroupsInRadiusMiddleware,
    createGroupValidations, createGroupMiddleware
} = require('./middlewares/groups')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ ok: true });
});

app.get('/groups/radius/:radius', getGroupsInRadiusValidations, getGroupsInRadiusMiddleware, getGroupsInRadius);
app.post('/groups', createGroupValidations, createGroupMiddleware, create);

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server listening on port', process.env.SERVER_PORT)
});