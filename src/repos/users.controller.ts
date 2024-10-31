import { Request, Response } from "express";
import Users from "@src/models/User";

import type { UserType } from "@src/models/User";

// Create and Save a new Tutorial
exports.create = (req: Request, res: Response) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({
        message: "Id - обязательное поле!"
      });
      return;
    }
  
    // Create a Tutorial
    const user = {
      id: req.body.id,
      email: req.body.email,
      name: req.body.name,
      created: new Date()
    }

    // Save Tutorial in the database
    // @ts-ignore
    Users.create(user)
      .then((data: IUser) => {
        res.send(data);
      })
      .catch((error: Error) => {
        res.status(500).send({
          message:
            error.message || "Что-то пошло не так)))."
        });
      });
};

// Retrieve all Tutorials from the database.
/* exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
}; */

/* Написать функцию sequence так, чтобы 

const a = sequence([1,2])
a() // 3
a() // 4

const b = sequence([3, 6])
b() // 9
b() // 12 */