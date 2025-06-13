/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export async function up(pgm) {
  pgm.createTable('stocks', {
    id: 'id',
    symbol: { type: 'varchar(10)', notNull: true, unique: true },
    name: { type: 'varchar(100)', notNull: true },
    description: { type: 'text', notNull: false },
    openrate: { type: 'numeric', notNull: false },
    closerate: { type: 'numeric', notNull: false },
    peakprice: { type: 'numeric', notNull: false },
    lowprice: { type: 'numeric', notNull: false },
    currentrate: { type: 'numeric', notNull: false },
    yearlow: { type: 'numeric', notNull: false },
    yearhigh: { type: 'numeric', notNull: false },
    createdat: { type: 'timestamp', default: pgm.func('current_timestamp') }
  });
}

export async function down(pgm) {
  pgm.dropTable('stocks');
}