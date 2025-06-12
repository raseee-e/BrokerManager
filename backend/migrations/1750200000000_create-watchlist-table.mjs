export async function up(pgm) {
  pgm.createTable('watchlist', {
    id: 'id',
    user_id: { type: 'integer', notNull: true, references: 'users(id)', onDelete: 'cascade' },
    stock_id: { type: 'integer', notNull: true, references: 'stocks(id)', onDelete: 'cascade' },
    created_at: { type: 'timestamp', default: pgm.func('current_timestamp') }
  });
  pgm.addConstraint('watchlist', 'unique_user_stock', {
    unique: ['user_id', 'stock_id']
  });
}

export async function down(pgm) {
  pgm.dropTable('watchlist');
}