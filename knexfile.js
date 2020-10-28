// Update with your config settings
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, './.env') });

const {
  DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  CLIENT,
  DATABASE2,
} = process.env;

const config = {
  development: {
    client: CLIENT,
    connection: {
      database: DATABASE,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
    },
    migrations: {
      directory: path.join(__dirname, '/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/server/db/seeds'),
    },
  },
  test: {
    client: CLIENT,
    connection: {
      database: DATABASE2,
      user: DB_USER,
      password: DB_PASSWORD,
      host: DB_HOST,
      port: DB_PORT,
    },
    migrations: {
      directory: path.join(__dirname, '/server/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, '/server/db/seeds'),
    },
  },
};

module.exports = config;
