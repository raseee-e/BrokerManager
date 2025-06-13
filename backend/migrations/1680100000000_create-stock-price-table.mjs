/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export async function up(pgm) {
  pgm.createTable('stock_prices', {
    id: 'id',
    stock_id: {
      type: 'integer',
      notNull: true,
      references: 'stocks(id)',
      onDelete: 'CASCADE'
    },
    time: { type: 'varchar(10)', notNull: true }, // z. B. '09:00'
    price: { type: 'numeric', notNull: true }
  });
}

export async function down(pgm) {
  pgm.dropTable('stock_prices');
}
