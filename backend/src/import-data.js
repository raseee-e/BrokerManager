import db from './services/database.service.js';

const seedDatabase = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS notifications (
        id SERIAL PRIMARY KEY,
        userId INT NOT NULL,
        stockId INT NOT NULL,
        direction VARCHAR(10) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.query(`
      INSERT INTO notifications (userId, stockId, direction)
      VALUES (1, 101, 'above'), (2, 102, 'below');
    `);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();