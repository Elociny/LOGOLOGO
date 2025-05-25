import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { LogoComponent } from "../../components/logo/logo.component";
import { ConfirmActionComponent } from "../../admin/components/modals/confirm-action/confirm-action.component";
import { ButtonActionComponent } from "../../admin/components/button-action/button-action.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    RegisterInputLayoutComponent,
    PasswordInputLayoutComponent,
    OrangeSquareButtonComponent,
    LogoComponent,
    ConfirmActionComponent,
    ButtonActionComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  modalErroLogin = false;
  modalErroUsuarioIncorreto = false

  abrirModalErroLogin() {
    this.modalErroLogin = true
  }

  fecharModalErroLogin() {
    this.modalErroLogin = false
  }

  abrirModalErroUsuarioIncorreto() {
    this.modalErroUsuarioIncorreto = true
  }

  fecharModalErroUsuarioIncorreto() {
    this.modalErroUsuarioIncorreto = false
  }

  constructor(private authService: AuthService, private router: Router) { }

  fazerLogin() {
    if (!this.email || !this.senha) {
      this.abrirModalErroLogin()
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
        this.abrirModalErroUsuarioIncorreto()
      });
  }
}
