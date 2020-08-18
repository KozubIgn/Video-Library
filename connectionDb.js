const {Pool, Client} = require("pg");
const connectionString = "postgressql://wzhyehqcomqdey:165df7bf7ab56adadf8efd040530f2a92e471236a779850c1befb5568330cab0@\n" +
    "ec2-18-203-62-227.eu-west-1.compute.amazonaws.com:5432/d6dgjd5ccrlo5s";

const client = new Client({
    connectionString:connectionString
});

client.connect();

client.query("SELECT * FROM videos", (err, res) => {
    console.log(err, res);
    client.end();
});