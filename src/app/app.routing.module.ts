import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MainComponent} from './main/main.component';
import {EditUserComponent} from './editUser/editUser.component';
import {AddComponent} from './add/add.component';
import {LoginGuard} from './guards/login.guard';
import {AddGuard} from './guards/add.guard';
import {AdminGuard} from './guards/admin.guard';
import {EditGuard} from './guards/edit.guard';
import {UserGuard} from './guards/user.guard';
import {RegistrationGuard} from './guards/registration.guard';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: 'user', component: UserComponent, canActivate: [UserGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'registration', component: RegistrationComponent, canActivate: [RegistrationGuard]},
  {path: 'edit/:id', component: EditUserComponent, canActivate: [EditGuard]},
  {path: 'main', component: MainComponent},
  {path: 'add', component: AddComponent, canActivate: [AddGuard]},
  {path: '', component: MainComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
