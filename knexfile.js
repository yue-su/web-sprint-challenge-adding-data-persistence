// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      port: 5432,
      database: "projects",
      user: "postgres",
      password: process.env.DB_PASSWORD,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: "ec2-34-194-198-176.compute-1.amazonaws.com",
      port: 5432,
      database: "d38tuu4fujm3m5",
      user: "bxgqpeinqpvamh",
      password:
        "709faff35c276ea3db9a68f35cbba45e60184d3472f865292df3e9cfec9a0137",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
}