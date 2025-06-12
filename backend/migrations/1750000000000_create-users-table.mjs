/**
 * @type {import('node-pg-migrate').MigrationBuilder}
 */
export async function up(pgm) {
  pgm.createTable('users', {
    id: 'id',
    username: { type: 'varchar(50)', notNull: true, unique: true },
    email: { type: 'varchar(100)', notNull: true, unique: true },
    password: { type: 'varchar(255)', notNull: true },
    createdAt: { type: 'timestamp', default: pgm.func('current_timestamp') }
  });
}

export async function down(pgm) {
  pgm.dropTable('users');
}
