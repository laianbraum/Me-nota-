import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import toDos from '../models/toDos';

export default{
  async create(request: Request, response: Response){
    const {
      description
    } = request.body;
  
    const toDosRepository = getRepository(toDos);

    const isCompleted = false;

    const toDo = toDosRepository.create({
      description,
      isCompleted
    });
    
    await toDosRepository.save(toDo);

    return response.status(201).json({message: "todo created"});
  },

  async index(request: Request, response: Response){
    const toDosRepository = getRepository(toDos);

    const allToDos = await toDosRepository.find();

    return response.json(allToDos);
  },

  async delete(request: Request, response: Response){
    const { id } = request.params;

    const toDosRepository = getRepository(toDos);

    const deleteTodo = await toDosRepository.delete(id);

    return response.json({message: "todo deleted!"});
  }
}