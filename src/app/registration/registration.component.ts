import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../model/role';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {User} from '../model/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  id;
  reCaptchaResponse;
  user: User;
  registrationForm: FormGroup;
  role: Role;
  dateNow = new Date();
  loginAlreadyExist: boolean;
  passwordNotMatch: boolean;
  incorrectBirthday: boolean;
  fillCaptcha: boolean;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.role = new Role(2, 'USER');

    this.registrationForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      confirmPassword: ['', [Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      email: ['', [Validators.required, Validators.pattern('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*\\.\\w{2,4}')]],
      firstName: ['', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,25}')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,25}')]],
      birthday: ['', Validators.required]
    });

  }

  registration() {
    if (this.reCaptchaResponse == null) {
      this.fillCaptcha = true;
      return;
    }
    if (this.checkBirthday(this.registrationForm.value.birthday) < 0) {
      this.incorrectBirthday = true;
      return;
    }
    if (this.registrationForm.value.password !== this.registrationForm.value.confirmPassword) {
      this.passwordNotMatch = true;
    }
    console.log(this.registrationForm.value);
    this.userService.registration(this.registrationForm.value)
      .forEach(() => {
        this.router.navigate(['/login']);
      }).catch(e => {
      if (e.status === 500) {
        this.loginAlreadyExist = true;
      }
    });
  }

  back() {
    this.router.navigate(['/']);
  }

  checkBirthday(date) {
    const newDate = new Date(date);
    return this.dateNow.valueOf() - newDate.valueOf();
  }

  resolved(captchaResponse: string) {
    this.reCaptchaResponse = captchaResponse;
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

}
