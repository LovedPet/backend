const { getConfig } = require('.')

const {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_MAX_CONNECTIONS
} = process.env

console.log('Testando env >>', DATABASE_USER)
const defaultSettings = {
  dialect: 'postgres',
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  database: DATABASE_NAME,
  username: DATABASE_USER,
  password: DATABASE_PASSWORD,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  pool: {
    max: Number(DATABASE_MAX_CONNECTIONS) || 50,
    min: 1,
  },
}

module.exports = getConfig({
  development: defaultSettings,
  test: defaultSettings,
  production: defaultSettings,
})