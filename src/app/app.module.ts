import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {AdminComponent} from './admin/admin.component';
import {AppRoutingModule} from './app.routing.module';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MainComponent} from './main/main.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EditUserComponent} from './editUser/editUser.component';
import {AddComponent} from './add/add.component';
import {LoginGuard} from './guards/login.guard';
import {AddGuard} from './guards/add.guard';
import {EditGuard} from './guards/edit.guard';
import {AdminGuard} from './guards/admin.guard';
import {RegistrationGuard} from './guards/registration.guard';
import {UserGuard} from './guards/user.guard';
import {NotFoundComponent} from './not-found/not-found.component';
import {RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HeaderComponent,
    AdminComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    EditUserComponent,
    AddComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [LoginGuard, AddGuard, EditGuard, AdminGuard, RegistrationGuard, UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
