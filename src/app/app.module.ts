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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
