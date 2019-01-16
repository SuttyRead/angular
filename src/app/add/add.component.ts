import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
              private userService: UserService) {
  }

  addForm: FormGroup;
  user;
  dateNow = new Date();
  loginAlreadyExist: boolean;
  passwordNotMatch: boolean;
  incorrectBirthday: boolean;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      login: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$')]],
      password: ['', [Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      confirmPassword: ['', [Validators.required,
        Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]],
      email: ['', [Validators.required, Validators.pattern('\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*\\.\\w{2,4}')]],
      firstName: ['', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,25}')]],
      lastName: ['', [Validators.required, Validators.pattern('^[A-Z]{1}[a-z]{1,25}')]],
      birthday: ['', [Validators.required]]
    });

  }

  add() {
    if (this.checkBirthday(this.addForm.value.birthday) < 0) {
      this.incorrectBirthday = true;
      return;
    }
    console.log(this.checkBirthday(this.addForm.value.birthday));
    if (this.addForm.value.password !== this.addForm.value.confirmPassword) {
      this.passwordNotMatch = true;
    }
    console.log(this.addForm.value);
    this.userService.save(this.addForm.value)
      .forEach(() => {
        this.router.navigate(['/admin']);
      }).catch(e => {
      if (e.status === 500) {
        this.loginAlreadyExist = true;
      }
    });
  }

  back() {
    this.router.navigate(['/admin']);
  }

  checkBirthday(date) {
    const newDate = new Date(date);
    return this.dateNow.valueOf() - newDate.valueOf();
  }

}
