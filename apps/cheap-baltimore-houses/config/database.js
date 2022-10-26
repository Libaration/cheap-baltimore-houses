const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", process.env.DATABASE_HOST),
      port: env.int("DATABASE_PORT", process.env.DATABASE_PORT),
      database: env("DATABASE_NAME", process.env.DATABASE_NAME),
      user: env("DATABASE_USERNAME", process.env.DATABASE_USERNAME),
      password: env("DATABASE_PASSWORD", process.env.DATABASE_PASSWORD),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
