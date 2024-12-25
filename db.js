const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "1160",
    host: "localhost",
    port: 5432,
    database: "zachet"
});

module.exports = pool