import { Request, Response } from 'express'
import UserRepository from '../repositories/user.repository'

export default class UserController {
  public async create(request: Request, response: Response) {
    if (!request.body.name) {
      response.status(400).send({
        message: "Content can not be empty!"
      })
      return
    }

    try {
      const result = await UserRepository.save(request.body)
      return response.status(200).send(result)
    }
    catch (err) {
      response.status(500).send({
        message: "Some error occurred while retrieving users."
      });
    }
  }

  public async findAll(request: Request, response: Response) {
    try {
      const result = await UserRepository.retrieveAll(request.params)

      return response.status(200).send(result)
    }
    catch (err) {
      response.status(500).send({
        message: "Some error occurred while retrieving all users."
      });
    }

  }

  public async findOne(request: Request, response: Response) {
    try {
      const result = await UserRepository.retrieveById(+request.params.id)

      return response.status(200).send(result)
    }
    catch (err) {
      response.status(500).send({
        message: "Some error occurred while find user."
      });
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const result = await UserRepository.update(request.body)

      return response.status(200).send(result)
    }
    catch (err) {
      response.status(500).send({
        message: "Some error occurred while update user."
      });
    }
  }

  public async delete(request: Request, response: Response) {
    try {
      const result = await UserRepository.delete(+request.params.id)

      return response.status(200).send(result)
    }
    catch (err) {
      response.status(500).send({
        message: "Some error occurred while delete user."
      });
    }
  }

  public async deleteAll(request: Request, response: Response) {
    try {
      const result = await UserRepository.deleteAll()

      return response.status(200).send(result)
    }
    catch (err) {
      response.status(500).send({
        message: "Some error occurred while delete all users."
      });
    }
  }
}
