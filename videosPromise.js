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
        const queryResult = await client.query("SELECT * FROM videos WHERE tags LIKE" + "'%" + tag + "%'");
        client.release();
        console.log(queryResult.rows);
        return queryResult.rows;
    },
    getSearchPromise: async (input) => {
        const client = await pool.connect();
        const queryResult = await client.query("SELECT * FROM videos WHERE title LIKE" + "'%" + input + "%'" + "OR description LIKE" + "'%" + input + "%'" + " OR tags LIKE" + "'%" + input + "%'");
        client.release();
        console.log(queryResult.rows);
        return queryResult.rows;
    }
}
module.exports = promises;

