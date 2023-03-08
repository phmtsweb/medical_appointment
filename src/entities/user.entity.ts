import { randomUUID } from 'node:crypto';

type IUser = {
  name: string;
  username: string;
  password: string;
}

export class User {
  id: string;
  name: string;
  username: string;
  password: string;
  isAdmin: boolean;

  private constructor(user: IUser) {
    this.name = user.name;
    this.username = user.username;
    this.password = user.password;
    this.id = randomUUID();
    this.isAdmin = false;
  }

  static create(props: IUser) {
    const user = new User(props);
    return user;
  }

}
