const { Pool, Client } = require('pg')
const connectionString = "postgres://wzhyehqcomqdey:165df7bf7ab56adadf8efd040530f2a92e471236a779850c1befb5568330cab0@ec2-18-203-62-227.eu-west-1.compute.amazonaws.com:5432/d6dgjd5ccrlo5s";

const connectToDb = () => {
    const pool = new Pool({
        connectionString: connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    })
    pool.query('SELECT * FROM videos', (err, res) => {
        console.log(err, res)
        pool.end()
    })
    const client = new Client({
        connectionString: connectionString,
        ssl: {
            rejectUnauthorized: false
        }
    })
    client.connect()
    client.query('SELECT * FROM videos', (err, res) => {
        console.log(err, res)
        client.end()
    })
}


module.exports = connectToDb;