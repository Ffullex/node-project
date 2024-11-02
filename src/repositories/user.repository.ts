import User from '../models/user.model'
import { Op } from 'sequelize'

interface IUserRepository {
  save( user: User ): Promise<User>;
  retrieveAll( searchParams: { name: string } ): Promise<User[]>;
  retrieveById( userId: number ): Promise<User | null>;
  update( user: User ): Promise<number>;
  delete( userId: number ): Promise<number>;
  deleteAll(): Promise<number>;
}

class UserRepository implements IUserRepository {
  async save( user: User ): Promise<User> {
    try {
      return await User.create( {
        name: user.name,
        email: user.email,
        created: user.created
      } )
    } catch ( err ) {
      throw new Error( 'Failed to create User!' )
    }
  }


  async retrieveAll( searchParams: { name?: string } ): Promise<User[]> {
    try {
      let condition: {
        created?: boolean
        name?:  { [ key: symbol ]: string}
      } = {}
      if ( searchParams?.name)
        condition.name = { [ Op.like ]: `%${ searchParams.name }%` }

      return await User.findAll( { where: condition } )
    } catch ( error ) {
      throw new Error( 'Failed to retrieve Users!' )
    }
  }

  async retrieveById(userId: number): Promise<User | null> {
    try {
      return await User.findByPk(userId);
    } catch (error) {
      throw new Error("Failed to retrieve Users!");
    }
  }

  async update(user: User): Promise<number> {
    const { id, name, email, created } = user;

    try {
      const affectedRows = await User.update(
        { name, email, created },
        { where: { id: id } }
      );

      return affectedRows[0];
    } catch (error) {
      throw new Error("Failed to update User!");
    }
  }

  async delete(userId: number): Promise<number> {
    try {
      const affectedRows = await User.destroy({ where: { id: userId } });

      return affectedRows;
    } catch (error) {
      throw new Error("Failed to delete User!");
    }
  }

  async deleteAll(): Promise<number> {
    try {
      return User.destroy({
        where: {},
        truncate: false
      });
    } catch (error) {
      throw new Error("Failed to delete Users!");
    }
  }
}

export default new UserRepository()