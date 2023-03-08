import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

type UserRequest = {
  name: string,
  username: string,
  password: string,
}

export class CreateUserUseCase {

  private userRepository: UserRepository = UserRepository.getInstance();

  async execute(user: UserRequest): Promise<User> {

    const { name, username, password } = user;

    if (!username || (typeof username === 'string' && username.trim() === '')) {
      throw new Error('Username is required');
    }

    if (!password || (typeof password === 'string' && password.trim() === '')) {
      throw new Error('Password is required');
    }

    if (!name || (typeof name === 'string' && name.trim() === '')) {
      throw new Error('Name is required');
    }

    const existUser = await this.userRepository.findByUsername(username);

    if (existUser) {
      throw new Error('User already exists');
    }
    const newUser = User.create({name, username, password});
    return this.userRepository.save(newUser);
  }
}
