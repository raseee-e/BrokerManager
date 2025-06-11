import pkg from 'pg';
const { Pool } = pkg;

// Configure the PostgreSQL connection using environment variables
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Query function
const query = (text, params) => {
  return pool.query(text, params);
};

export default {
  query,
};