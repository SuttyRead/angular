import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './model/user';
import {UserForm} from './user-form';
import {ResponseLogin} from './model/responseLogin';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.sessionStorage.getItem('token')
    });
    return this.httpClient.get<User[]>('http://10.10.103.100:8050/users', {headers: headers});
  }

  getUserById(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.sessionStorage.getItem('token')
    });
    return this.httpClient.get<User>('http://10.10.103.100:8050/users/' + id, {headers: headers});
  }

  save(user: UserForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.sessionStorage.getItem('token')
    });
    return this.httpClient.post<User>('http://10.10.103.100:8050/users', user, {headers: headers});
  }

  delete(id) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.sessionStorage.getItem('token')
    });
    return this.httpClient.delete<User>('http://10.10.103.100:8050/users/' + id, {headers: headers}).subscribe();
  }

  put(user) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.sessionStorage.getItem('token')
    });
    return this.httpClient.put<User>('http://10.10.103.100:8050/users/' + user.id, user, {headers: headers}).subscribe();
  }

  getUserByLogin(login) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.sessionStorage.getItem('token')
    });
    return this.httpClient.get<User>('http://10.10.103.100:8050/users/login' + login, {headers: headers});
  }

  login(userForm) {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post<ResponseLogin>('http://10.10.103.100:8050/login', userForm, {headers: headers});
  }

  registration(user: UserForm) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient.post<User>('http://10.10.103.100:8050/registration', user, {headers: headers});
  }

  logout() {
    window.sessionStorage.clear();

  }

  ngOnInit() {
  }

}
