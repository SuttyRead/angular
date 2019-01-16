import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../user.service';
import {Optional} from '@angular/core';

export class UsernameValidator {

  // public static userService: UserService;


  constructor(@Optional() private userService: UserService) {
    // this.userService = userService;
  }

  static validUsername(fc: FormControl) {
    // if (addForm.value.password !== addForm.value.confirmPassword) {
    //   return ({passwordNotMatch: true});
    // } else {
    //   return (null);
    // }
    if (fc.value === 'admin') {
      return ({loginAlreadyExist: true});
    } else {
      return (null);
    }
    // if (this.userService.getUserByLogin(fc.value)) {
    //
    // }
    // if (fc.value.toLowerCase() === 'abc123' || fc.value.toLowerCase() === '123abc') {
    //   return ({validUsername: true});
    // } else {
    //   return (null);
    // }
  }

}
