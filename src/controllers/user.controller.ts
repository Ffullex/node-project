import { Request, Response } from 'express'
import UserRepository from '../repositories/user.repository'

export default class UserController {
  public async create( request: Request, response: Response ) {
    const result = await UserRepository.save(request.body)

    return response.json(result)
  }

  public async findAll( request: Request, response: Response ) {
    const result = await UserRepository.retrieveAll(request.params)

    return response.json(result)
  }

  public async findOne( request: Request, response: Response ) {
    const result = await UserRepository.retrieveById(+request.params.id)

    return response.json(result)
  }

  public async update( request: Request, response: Response ) {
    const result = await UserRepository.update(request.body)

    return response.json(result)
  }

  public async delete( request: Request, response: Response ) {
    return
  }

  public async deleteAll( request: Request, response: Response ) {
    const result = await UserRepository.delete(+request.params.id)

    return response.json(result)
  }

  public async findAllPublished( request: Request, response: Response ) {
  }
}
