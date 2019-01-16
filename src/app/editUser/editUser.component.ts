import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Role} from '../model/role';

@Component({
  selector: 'app-edit',
  templateUrl: './editUser.component.html',
  styleUrls: ['./editUser.component.css']
})
export class EditUserComponent implements OnInit {

  id;
  addForm: FormGroup;
  roles: Role[];
  dateNow = new Date();
  incorrectBirthday: boolean;

  constructor(private activateRoute: ActivatedRoute, private userService: UserService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.roles = [new Role(1, 'ADMIN'), new Role(2, 'USER')];
    this.activateRoute.params.subscribe(params => this.id = params['id']);
    if (this.id == null) {
      this.router.navigate(['/admin'], {queryParams: {editSuccess: 'true'}});
    }
    this.userService.getUserById(this.id).subscribe(user => this.addForm.setValue(user));

    this.addForm = this.formBuilder.group({
      id: [''],
      login: ['', Validators.required],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });

  }

  edit() {
    if (this.checkBirthday(this.addForm.value.birthday) < 0) {
      this.incorrectBirthday = true;
      return;
    }
    this.userService.put(this.addForm.value);
    this.router.navigate(['/admin'], {queryParams: {editSuccess: true}});
    location.reload();
  }

  back() {
    this.router.navigate(['/admin']);
  }

  checkBirthday(date) {
    const newDate = new Date(date);
    return this.dateNow.valueOf() - newDate.valueOf();
  }

}
