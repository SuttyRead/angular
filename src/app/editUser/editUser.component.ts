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

  constructor(private activateRoute: ActivatedRoute, private userService: UserService,
              private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.roles = [new Role(1, 'ADMIN'), new Role(2, 'USER')];
    this.activateRoute.params.subscribe(params => this.id = params['id']);
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
    console.log(this.addForm.value);
    this.userService.put(this.addForm.value);
    this.router.navigate(['/admin']);
  }

  back() {
    this.router.navigate(['/admin']);
  }

}
