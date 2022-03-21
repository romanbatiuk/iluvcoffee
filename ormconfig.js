module.exports = {
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'coffees-db',
	entities: ['dist/**/*.entity{.ts,.js}'],
	migrations: ['dist/migrations/*{.ts,.js}'],
	cli: {
		migrationsDir: 'src/migrations',
	},
};
