const { Pool } = require("pg");
// const connectionString = 'postgres://postgres@localhost:5432/cms';
const connectionString = 'postgres://postgres@localhost:5432/cms';

const pool = new Pool({
  connectionString: connectionString
});

const query = (queryString) => pool.query(queryString);

module.exports = { query };