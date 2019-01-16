import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private activateRoute: ActivatedRoute) {
  }

  users;
  editSuccess: boolean;
  dateNow = new Date();

  ngOnInit() {
    this.userService.getAll().subscribe(value => this.users = value);
    this.editSuccess = this.activateRoute.snapshot.queryParams['editSuccess'];
  }

  edit(id) {
    this.router.navigate(['/edit/' + id]);
  }

  delete(id) {
    this.userService.delete(id);
    this.router.navigate(['/admin']);
    location.reload();
  }

  calculateAge(date) {
    const newDate = new Date(date);
    return this.dateNow.getFullYear() - newDate.getFullYear();
  }

}
