import db from '@src/models'

// **** Export default **** //
export type UserType = {
  id: number
  email: string
  name: string
  created: Date
}

//@ts-ignore
export const Users = db.sequelize.define("users", {
  id: {
    //@ts-ignore
    type: db.Sequelize.NUMBER,
    primaryKey: true,
  },
  email: {
    //@ts-ignore
    type: db.Sequelize.STRING,
  },
  name: {
    //@ts-ignore
    type: db.Sequelize.STRING,
  },
  created: {
    //@ts-ignore
    type: db.Sequelize.DATE,
  }
})

