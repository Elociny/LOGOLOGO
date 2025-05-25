import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { LogoComponent } from "../../components/logo/logo.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    RegisterInputLayoutComponent,
    PasswordInputLayoutComponent,
    OrangeSquareButtonComponent,
    LogoComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  fazerLogin() {
    if (!this.email || !this.senha) {
      alert('Preencha os campos!');
      return;
    }

    this.authService.login(this.email, this.senha)
      .then((res: any) => {
        if (res.tipo === 'admin') {
          this.router.navigate(['/admin']);
        } else if (res.tipo === 'client') {
          this.router.navigate(['/']);
        }
      })
      .catch(() => {
        alert('Usuário ou senha incorretos!');
      });
  }
}
