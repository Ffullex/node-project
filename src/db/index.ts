import { Sequelize } from 'sequelize-typescript'
import { config } from '../config/db.config'
import User from '../models/user.model'

class Database {
  public sequelize: Sequelize | undefined

  constructor() {
    this.connectToDatabase()
  }

  private async connectToDatabase() {
    this.sequelize = new Sequelize( {
      database: config.DB,
      username: config.USER,
      password: config.PASSWORD,
      host: config.HOST,
      dialect: config.dialect as 'postgres',
      port: config.port,
      models: [ User ],
      pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
      },
    } )

    await this.sequelize
      .authenticate()
      .then( () => {
        console.log( 'Connection has been established successfully.' )
      } )
      .catch( ( err ) => {
        console.error( 'Unable to connect to the Database:', err )
      } )
  }
}

export default Database
