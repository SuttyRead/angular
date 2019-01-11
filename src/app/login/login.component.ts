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
    this.http.post('http://localhost:8090/login', this.userForm).subscribe(value => this.token = value['value']);
    // console.log('Token = ' + this.token);
  }

}
