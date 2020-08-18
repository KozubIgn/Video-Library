const pool = require("./poolDb");

const getVideos = async () => {
    const client = await pool.connect();
    const queryResult = await client.query('SELECT * FROM videos');
    const promiseArr = [];

    queryResult.rows.forEach(row => {
        promiseArr.push(row)
    })

    client.release();
    pool.end();

    const arr = await Promise.all(promiseArr);

    return queryResult.rows;

}

const videosArray = getVideos();

module.exports = videosArray;