const pool = require('../database');

module.exports = {
    groupsInRadius: async (req, res) => {
        const { radius } = req.params;
        const { userLatitude, userLongitude } = req.body;

        if (!userLatitude || !userLongitude)
            return res.status(400).json({ error: "userLatitude and userLongitude are required" });

        try {
            const groups = await pool.query(
                `SELECT NAME, DESCRIPTION, LINK_CODE, LATITUDE, LONGITUDE FROM GROUPS
                    WHERE point(longitude, latitude) <@> point($1, $2) < $3*0.6214`,
                    [userLongitude, userLatitude, radius]
                );
            
            return res.json(groups.rows);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    },
    create: async (req, res) => {
        const {
            name, description, link_code, latitude, longitude
        } = req.body;
    
        try {
            const newGroup = await pool.query (
                `INSERT INTO GROUPS (NAME, DESCRIPTION, LINK_CODE, LATITUDE, LONGITUDE)
                    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [name, description, link_code, latitude, longitude]
            );
    
            return res.json(newGroup.rows[0]);
        } catch(error) {
            return res.status(400).json({ error: error.message });
        }
    }
};