import { Model, Table, Column, DataType } from 'sequelize-typescript'


@Table( {
  tableName: 'tutorials'
} )
export default class Tutorial extends Model {
  @Column( {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'id'
  } )
  id?: number

  @Column( {
    type: DataType.STRING( 255 ),
    field: 'email'
  } )
  title?: string

  @Column( {
    type: DataType.STRING( 255 ),
    field: 'name'
  } )
  description?: string

  @Column( {
    type: DataType.DATE,
    field: 'created'
  } )
  published?: Date
}