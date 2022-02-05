require('dotenv').config()
const express = require('express');
const app = express();
const pool = require('./database');

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ ok: true })
})

app.get('/groups', async (req, res) => {
    try {
        const groups = await pool.query ('select * from groups');
        
        return res.json(groups.rows);
    } catch(error) {
        return res.status(400).json({ error: error.message });
    }
});

app.post('/groups', async (req, res) => {
    const {
        name, description, link_code, latitude, longitude
    } = req.body;

    try {
        const newGroup = await pool.query (
            `insert into groups (name, description, link_code, latitude, longitude)
                values ($1, $2, $3, $4, $5) returning *`,
            [name, description, link_code, latitude, longitude]
        );

        return res.json(newGroup.rows[0]);
    } catch(error) {
        return res.status(400).json({ error: error.message });
    }
});

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server listening on port', process.env.SERVER_PORT)
});