const pool = require("./poolDb");

const promises = {
    getVideosPromise : async () => {
        const client = await pool.connect();
        const queryResult = await client.query('SELECT * FROM videos ORDER BY RANDOM() LIMIT 5');
        client.release();
        // pool.end();

        return queryResult.rows;
    },

    getIdPromise : async(id) => {
        const client = await pool.connect();
        const queryResult = await client.query('SELECT * FROM videos ORDER BY RANDOM() LIMIT 5');
        client.release();
        // pool.end();

        return queryResult.rows;
    }
}


module.exports = promises;

//zrobic folder i dac to tam

