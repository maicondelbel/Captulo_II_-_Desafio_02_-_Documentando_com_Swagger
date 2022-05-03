import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const userIdFromParams = {
        user_id: String(request.params.user_id),
      };

      const userTurnedAdmin = this.turnUserAdminUseCase.execute(
        userIdFromParams
      );

      return response.json(userTurnedAdmin);
    } catch (error) {
      return response.status(404).json({ error: error.message });
    }
  }
}

export { TurnUserAdminController };
