import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [AuthenticationComponent, LoginComponent, RegistrationComponent]
})
export class AuthenticationModule {
}
