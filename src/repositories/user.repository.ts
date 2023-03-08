import { User } from '../entities/user.entity';


export class UserRepository {

  private users: User[];

  private static instance: UserRepository;

  private constructor() {
    this.users = [];
  }

  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async save(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

}
