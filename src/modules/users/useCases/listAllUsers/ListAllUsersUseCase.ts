import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists!");
    }

    if (user.admin === false) {
      throw new Error("User does not have admin permission!");
    }

    const allUsersList = this.usersRepository.list();

    return allUsersList;
  }
}

export { ListAllUsersUseCase };
