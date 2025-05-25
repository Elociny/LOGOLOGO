import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { LogoComponent } from "../../components/logo/logo.component";
import { HttpClient } from '@angular/common/http';
import { ConfirmActionComponent } from "../../admin/components/modals/confirm-action/confirm-action.component";
import { ButtonActionComponent } from "../../admin/components/button-action/button-action.component";

@Component({
  selector: 'app-singup',
  imports: [RouterModule, OrangeSquareButtonComponent, RegisterInputLayoutComponent, PasswordInputLayoutComponent, LogoComponent, ConfirmActionComponent, ButtonActionComponent],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  modalErroLogin = false
  modalErroSenha = false
  modalCadastroUsuario = false
  modalErroCadastroUsuario = false

  abrirModalErroLogin() {
    this.modalErroLogin = true
  }

  fecharModalErroLogin() {
    this.modalErroLogin = false
  }

  abrirModalErroSenha() {
    this.modalErroSenha = true
  }

  fecharModalSenha() {
    this.modalErroSenha = false
  }

  abrirModalCadastroUsuario() {
    this.modalCadastroUsuario = true
  }

  fecharModalCadastroUsuario() {
    this.modalCadastroUsuario = false
    this.router.navigate(['/']);
  }

  abrirModalErroCadastroUsuario() {
    this.modalErroCadastroUsuario = true
  }

  fecharModalErroCadastroUsuario() {
    this.modalErroCadastroUsuario = false
  }

  constructor(private http: HttpClient, private router: Router) { }

  cadastrar() {
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      this.abrirModalErroLogin()
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.abrirModalErroSenha()
      return;
    }

    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.http.post('http://localhost:3000/clients', novoUsuario).subscribe(
      () => {
        this.abrirModalCadastroUsuario();
      },
      (error) => {
        this.abrirModalErroCadastroUsuario()
        console.error(error);
      }
    );
  }
}
