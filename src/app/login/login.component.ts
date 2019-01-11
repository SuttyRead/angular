import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserForm} from '../user-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: UserForm;
  token: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  loginAuth(data) {
    this.userForm = new UserForm(data.login, data.password);
    console.log(this.userForm);
    this.http.post('http://localhost:9000/login', this.userForm);
    // console.log('Token = ' + this.token);
  }

}
