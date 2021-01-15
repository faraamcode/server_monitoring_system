const Pool = require("pg").Pool;
const pool = new Pool({
 user: "postgres",
 password: "Gbemisola1.",
 host : "localhost",
 database: "bootcamp"
})

module.exports = pool;