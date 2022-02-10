const pool = require('../database');

module.exports = {
    getGroupsInRadius: async (req, res) => {
        const { radius, latitude, longitude } = req.params;

        try {
            const groups = await pool.query(
                `SELECT * FROM GROUPS
                    WHERE point(longitude, latitude) <@> point($1, $2) < $3*0.6214`,
                    [longitude, latitude, radius]
                );
            
            return res.json(groups.rows);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    },
    create: async (req, res) => {
        const {
            name, description, linkCode, latitude, longitude
        } = req.body;
    
        try {
            const newGroup = await pool.query (
                `INSERT INTO GROUPS (NAME, DESCRIPTION, LINK_CODE, LATITUDE, LONGITUDE)
                    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [name, description, linkCode, latitude, longitude]
            );
    
            return res.json(newGroup.rows[0]);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }
};