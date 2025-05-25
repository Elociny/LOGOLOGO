import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RegisterInputLayoutComponent,
    PasswordInputLayoutComponent,
    OrangeSquareButtonComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  credenciaisInvalidas: boolean = false;

  constructor(private router: Router) {}

  login() {
    if (this.email.trim() === 'admin@gmail.com' && this.password.trim() === '1234') {
      this.router.navigate(['/admin']);
    } else {
      this.credenciaisInvalidas = true;
      setTimeout(() => this.credenciaisInvalidas = false, 3000);
    }
  }
}
