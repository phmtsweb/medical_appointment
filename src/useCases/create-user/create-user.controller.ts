import { Request, Response } from 'express';
import { CreateUserUseCase } from './create-user.usecase';

export class CreateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    if (!request.body) {
      return response.status(404).json({ error: 'Data is required' });
    }
    const { name, username, password } = request.body;

    const useCase = new CreateUserUseCase();
    const result = await useCase.execute({ name, username, password });

    return response.json(result);
  }
}
