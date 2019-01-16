import {Role} from './role';

export class User {

  id: number;
  login: string;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  lastName: string;
  birthday: string;
  role: Role;

}
