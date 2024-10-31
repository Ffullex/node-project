import { dbConfig } from '../db.config'

import { Dialect, Sequelize } from "sequelize"

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect as Dialect,
  
  operatorsAliases: undefined,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {};

// @ts-ignore
db.Sequelize = Sequelize
// @ts-ignore
db.sequelize = sequelize

import { Users } from './User'

// @ts-ignore
db.users = Users

export default db