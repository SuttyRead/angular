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
  user: User;
  registrationForm: FormGroup;
  role: Role;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.role = new Role(2, 'USER');

    this.registrationForm = this.formBuilder.group({
      // id: [''],
      login: ['', Validators.required],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
    });


  }

  registration() {
    console.log(this.registrationForm.value);
    this.userService.save(this.registrationForm.value)
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

  back() {
    this.router.navigate(['/']);
  }

}
