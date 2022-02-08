require('dotenv').config()

const express = require('express');
const app = express();
const { 
    groupsInRadius,
    create
} = require('./controllers/groups')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ ok: true });
});

app.get('/groups/radius/:radius', groupsInRadius);
app.post('/groups', create);

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server listening on port', process.env.SERVER_PORT)
});