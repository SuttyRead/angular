import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login: string;
  role: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.login = window.sessionStorage.getItem('login');
    this.role = window.sessionStorage.getItem('role');
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/']);
    location.reload();
  }

}
