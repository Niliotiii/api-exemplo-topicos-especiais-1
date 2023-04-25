// Arquivo: user.controller.ts

import { Request, Response, request } from 'express';
import { App } from '../../../app';

var users = [{id: 1, nome: 'Danilo', email: 'danilosaiter@hotmail.com', usuario: 'niliotiii', senha:'1234', situacao:true},
{id: 2, nome: 'Caian', email: 'caianhenrique@gmail.com', usuario: 'caianzeira', senha:'4321', situacao:true}]
 
const insert = {id: 3, nome: 'Adrian', email: 'adrianferreira@gmail.com', usuario: 'adriano', senha:'2134', situacao:true}

export class UserController {

  // retorna usuarios
  public list(req: Request, res: Response) {
    res.status(200).json(users);
  }

  // cria um usuario
  public create(req:Request, res: Response) {

    users.push(insert) 

    res.status(200).json({message: 'função insert'});
  }

  // atualiza um usuario
  public update(data:any, res: Response) {
    res.status(200).json({message: 'função update'});
  }

  // deleta um usuario
  public delete(data:any, res: Response) {
    res.status(200).json({message: 'função destroy'});
  }
}