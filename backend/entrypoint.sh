#!/bin/bash
set -e

# Wait for the database to be ready
echo "Waiting for database to be ready..."
until pg_isready -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER"; do
  sleep 1
done

echo "Database is ready!"

# Run migrations
echo "Running migrations..."
npm run migrate up

# Seed stocks table (only if empty)
echo "Seeding stocks table if empty..."
node -e "
import pg from 'pg';
const client = new pg.Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
await client.connect();
const res = await client.query('SELECT COUNT(*) FROM stocks');
if (parseInt(res.rows[0].count) === 0) {
  await client.query(\`
    INSERT INTO stocks (symbol, name, description, openRate, closeRate, peakPrice, lowPrice, currentRate, yearLow, yearHigh) VALUES
    ('AAPL', 'Apple Inc.', 'Apple stock', 170, 172, 175, 169, 171, 150, 180),
    ('MSFT', 'Microsoft', 'Microsoft stock', 220, 216, 260, 195, 200, 180, 270),
    ('DIS', 'Disney', 'Disney stock', 460, 521, 530, 456, 511, 400, 600),
    ('IBM', 'IBM', 'IBM stock', 8, 8, 8, 8, 8, 8, 8),
    ('KO', 'Coca-Cola', 'Coca-Cola stock', 620, 717, 789, 650, 740, 600, 800);
  \`);
  console.log('Seeded stocks table.');
} else {
  console.log('Stocks table already seeded.');
}
await client.end();
"

# Start the backend server
echo "Starting backend server..."
exec npm start