import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserComponent} from './user/user.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MainComponent} from './main/main.component';
import {EditUserComponent} from './editUser/editUser.component';
import {AddComponent} from './add/add.component';

const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'edit/:id', component: EditUserComponent},
  {path: 'main', component: MainComponent},
  {path: 'add', component: AddComponent},
  {path: '', component: MainComponent}
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
