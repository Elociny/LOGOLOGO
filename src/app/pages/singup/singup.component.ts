import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { OrangeSquareButtonComponent } from "../../components/buttons/orange-square-button/orange-square-button.component";
import { RegisterInputLayoutComponent } from "../../components/register-input-layout/register-input-layout.component";
import { PasswordInputLayoutComponent } from "../../components/password-input-layout/password-input-layout.component";
import { LogoComponent } from "../../components/logo/logo.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-singup',
  imports: [RouterModule, OrangeSquareButtonComponent, RegisterInputLayoutComponent, PasswordInputLayoutComponent, LogoComponent],
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  cadastrar() {
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      alert('Preencha todos os campos');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const novoUsuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.http.post('http://localhost:3000/clients', novoUsuario).subscribe(
      () => {
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
        alert('Erro ao cadastrar. Tente novamente.');
      }
    );
  }
}
