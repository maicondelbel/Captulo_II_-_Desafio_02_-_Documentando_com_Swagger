import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const userIdFromHeaders = {
        user_id: String(request.headers.user_id),
      };

      const usersList = this.listAllUsersUseCase.execute(userIdFromHeaders);

      return response.json(usersList);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
