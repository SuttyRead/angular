import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../model/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user: User;
  incorrect: boolean;

  constructor(private http: HttpClient, private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z0-9-_\\.]{1,20}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
    });
  }

  loginAuth() {
    this.userService.login(this.loginForm.value).subscribe(value => {
      if (value == null) {
        console.log('token');
        this.incorrect = true;
        return;
      }
      sessionStorage.setItem('token', value.token);
      sessionStorage.setItem('login', value.login);
      sessionStorage.setItem('role', value.role.name);
      this.router.navigate(['/admin']);
      location.reload();
    });

  }

}
