import pkg from 'pg';
const { Pool } = pkg;

// Configure the PostgreSQL connection using environment variables
const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST,
  database: 'broker_db',
  password: 'yourpassword',
  port: process.env.DB_PORT,
});

// Query function
const query = (text, params) => {
  return pool.query(text, params);
};

export default {
  query,
};