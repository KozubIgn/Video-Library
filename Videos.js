const pool = require("./poolDb");

const getVideosPromise =  async () => {
    const client = await pool.connect();
    const queryResult = await client.query('SELECT * FROM videos');
    client.release();
    pool.end();

    return queryResult.rows;
}

module.exports = getVideosPromise;