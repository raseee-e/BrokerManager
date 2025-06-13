export async function up(pgm) {
  pgm.createTable('shares', {
    id: 'id',
    user_id: { type: 'integer', notNull: true, references: 'users(id)', onDelete: 'cascade' },
    stock_id: { type: 'integer', notNull: true, references: 'stocks(id)', onDelete: 'cascade' },
    quantity: { type: 'integer', notNull: true },
    bought_at: { type: 'timestamp', default: pgm.func('current_timestamp') }
  });
}

export async function down(pgm) {
  pgm.dropTable('shares');
}