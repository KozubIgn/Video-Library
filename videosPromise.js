const pool = require("./poolDb");

const promises = {
    getVideosPromise: async () => {
        const client = await pool.connect();
        const queryResult = await client.query('SELECT * FROM videos ORDER BY RANDOM() LIMIT 5');
        client.release();
        // pool.end();
        return queryResult.rows;
    },
    getIdPromise: async (id) => {
        const client = await pool.connect();
        const queryResult = await client.query('SELECT * FROM videos WHERE id =' + id);
        client.release();
        // pool.end();

        return queryResult.rows;
    },
    getTagPromise: async (tag) => {
        const client = await pool.connect();
        const queryResult = await client.query(
            "SELECT * FROM videos WHERE tags LIKE $1", ['%' + tag + '%'], (err, results) => {
                if (err) {
                    throw err;
                }
            });
        client.release();
        console.log(queryResult);
        return queryResult;
    }
}

module.exports = promises;
//zrobic folder i dac to tam

