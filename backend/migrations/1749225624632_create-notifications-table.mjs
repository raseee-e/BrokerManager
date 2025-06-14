/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export async function up(pgm) {
  pgm.createTable('notifications', {
    id: 'id',
    userId: { type: 'integer', notNull: true },
    stockId: { type: 'integer', notNull: true },
    direction: { type: 'varchar(10)', notNull: true },
    createdAt: { type: 'timestamp', default: pgm.func('current_timestamp') },
  });
}

export async function down(pgm) {
  pgm.dropTable('notifications');
}
