const dbDetails = require("./secrete/data")
const Pool = require("pg").Pool;
const pool = new Pool({
 user: dbDetails.database.user,
 password: dbDetails.database.password,
 host : dbDetails.database.host,
 database: dbDetails.database.database
})

module.exports = pool;