import { Component, Input, OnInit } from '@angular/core';
import { ConfirmActionComponent } from '../modals/confirm-action/confirm-action.component';
import { InfoUsersComponent } from '../modals/info-users/info-users.component';
import { ButtonActionComponent } from '../button-action/button-action.component';
import { Admin } from '../../../core/types/admin.types';
import { AdminService } from '../../../core/services/admin.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table-users',
  imports: [
    ConfirmActionComponent,
    InfoUsersComponent,
    ButtonActionComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './table-users.component.html',
  styleUrl: './table-users.component.css',
  standalone: true,
})
export class TableUsersComponent implements OnInit {
 @Input() listaAdmins: Admin[] = [];


  private _textoBuscaUsuarios: string = '';
  todosAdmins: Admin[] = [];

  @Input() set textoBuscaUsuarios(value: string) {
    this._textoBuscaUsuarios = value;
    this.filtrarUsuarios();
  }

 get textoBuscaUsuarios(): string {
  return this._textoBuscaUsuarios;
}


  adminSelecionado: Admin = {
    nome: '',
    sobrenome: '',
    email: '',
    senha: '',
  };

  modalExclusaoAberto = false;
  modalInformacoesAberto = false;
  modalAlterarUsuarioAberto = false;
  modalConfirmarAlteracaoAberto = false;
  modalErroAlteracao = false;

  constructor(private service: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe((admins) => {
      this.todosAdmins = admins;
      this.listaAdmins = [...admins];
    });
  }

  filtrarUsuarios() {
    const termo = this.textoBuscaUsuarios.toLowerCase().trim();

    if (!termo) {
      this.listaAdmins = [...this.todosAdmins];
      return;
    }

    this.listaAdmins = this.todosAdmins.filter((admin) =>
      admin.nome.toLowerCase().includes(termo)
    );
  }

  abrirModalExclusao(admin: Admin) {
    this.adminSelecionado = admin;
    this.modalExclusaoAberto = true;
  }

  fecharModalExclusao() {
    this.modalExclusaoAberto = false;
  }

  abrirModalInformacoes(admin: Admin) {
    this.adminSelecionado = admin;
    this.modalInformacoesAberto = true;
  }

  fecharModalInformacoes() {
    this.modalInformacoesAberto = false;
  }

  abrirAlterarUsuario(admin: Admin) {
    this.adminSelecionado = { ...admin };
    this.modalAlterarUsuarioAberto = true;
  }

  fecharAlterarUsuario() {
    this.modalAlterarUsuarioAberto = false;
  }

  abrirConfirmarAlteracaoUsuario() {
    this.modalConfirmarAlteracaoAberto = true;
  }

  fecharConfirmarAlteracaoUsuario() {
    this.modalConfirmarAlteracaoAberto = false;
  }

  abrirModalErroAlteracao() {
    this.modalErroAlteracao = true;
  }

  fecharModalErroAlteracao() {
    this.modalErroAlteracao = false;
  }

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        this.todosAdmins = this.todosAdmins.filter((a) => a.id !== id);
        this.filtrarUsuarios();
      });
    }
  }

  confirmarAlteracaoAdmin() {
    if (
      !this.adminSelecionado.nome?.trim() ||
      !this.adminSelecionado.sobrenome?.trim() ||
      !this.adminSelecionado.email?.trim() ||
      !this.adminSelecionado.senha?.trim()
    ) {
      this.modalErroAlteracao = true;
      return;
    }

    if (this.adminSelecionado && this.adminSelecionado.id) {
      this.service.editar(this.adminSelecionado).subscribe(() => {
        this.abrirConfirmarAlteracaoUsuario();

        this.service.listar().subscribe((admins) => {
          this.todosAdmins = admins;
          this.filtrarUsuarios();
        });
      });
    }
  }

  trackAdmin(index: number, admin: Admin): number | string {
    return admin.id ?? index;
  }
}
