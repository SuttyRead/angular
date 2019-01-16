import {Role} from './role';

export class ResponseLogin {

  login: string;
  token: string;
  role: Role;

  constructor(token: string, role: Role) {
    this.token = token;
    this.role = role;
  }

}
