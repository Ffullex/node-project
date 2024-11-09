export const config = {
  HOST: "127.0.0.1",
  USER: "postgres",
  PASSWORD: "admin4321",
  DB: "myDB",
  port: 5432,
  dialect: 'postgres',
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 20000,
  }
}