export const dbConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  port: 3000,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}