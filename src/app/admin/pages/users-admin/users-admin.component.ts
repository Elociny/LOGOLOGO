import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Admin } from '../../../core/types/admin.types';
import { AdminService } from '../../../core/services/admin.service';
import { TableUsersComponent } from '../../components/table-users/table-users.component';
import { InfoUsersComponent } from '../../components/modals/info-users/info-users.component';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { ConfirmActionComponent } from '../../components/modals/confirm-action/confirm-action.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-users-admin',
  templateUrl: './users-admin.component.html',
  styleUrl: './users-admin.component.css',
  standalone: true,
  imports: [
    RouterModule,
    TableUsersComponent,
    InfoUsersComponent,
    ButtonActionComponent,
    ConfirmActionComponent,
    FormsModule,
  ],
})
export class UsersAdminComponent implements OnInit {
  textoBuscaUsuarios: string = '';
  modalCadastrarUsuarioAberto = false;
  modalConfirmarCadastroUsuarioAberto = false;
  modalErroUsuarioAberto = false;
  admin: Admin = {} as Admin;
  adminId?: number;
  listaAdminsOriginal: Admin[] = [];
  listaAdminsFiltrada: Admin[] = [];

   usuarioLogado: { nome: string; email: string } | null = null;

  constructor(
    private service: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

 ngOnInit(): void {
    this.adminId = Number(this.route.snapshot.params['id']);
    if (this.adminId) {
      this.service.buscarPorId(this.adminId).subscribe((admin) => {
        if (admin) {
          this.admin = { ...admin };
        }
      });
    }

    this.carregarUsuarios();

    const usuarioStr = localStorage.getItem("usuarioLogado");
    if (usuarioStr) {
      const usuario = JSON.parse(usuarioStr);
      this.usuarioLogado = {
        nome: usuario.nome || usuario.nomeCompleto || "Usuário",
        email: usuario.email || "email@exemplo.com",
      };
    }
  }

  carregarUsuarios() {
    this.service.listar().subscribe((admins) => {
      this.listaAdminsOriginal = admins;
      this.listaAdminsFiltrada = admins;
    });
  }

   filtrarUsuarios() {
    const termo = this.textoBuscaUsuarios.toLowerCase().trim();
    if (!termo) {
      this.listaAdminsFiltrada = [...this.listaAdminsOriginal];
      return;
    }
    this.listaAdminsFiltrada = this.listaAdminsOriginal.filter((u) =>
      u.nome.toLowerCase().includes(termo)
    );
  }

  abrirModalCadastrarUsuario() {
    this.admin = {
      nome: '',
      sobrenome: '',
      email: '',
      senha: '',
    };
    this.modalCadastrarUsuarioAberto = true;
  }

  fecharModalCadastrarUsuario() {
    this.modalCadastrarUsuarioAberto = false;
  }

  abrirModalConfirmarCadastro() {
    this.modalConfirmarCadastroUsuarioAberto = true;
  }

  fecharModalConfirmarCadastroUsuario() {
    this.modalConfirmarCadastroUsuarioAberto = false;
    this.carregarUsuarios();
  }

  abrirModalErroCadastro() {
    this.modalErroUsuarioAberto = true;
  }

  fecharModalErroUsuario() {
    this.modalErroUsuarioAberto = false;
  }

  submeter() {
    const { nome, sobrenome, email, senha } = this.admin;

    if (
      !nome?.trim().length ||
      !sobrenome?.trim().length ||
      !email?.trim().length ||
      !senha?.trim().length
    ) {
      this.abrirModalErroCadastro();
      return;
    }

    this.service.incluir(this.admin).subscribe(() => {
      this.abrirModalConfirmarCadastro();
    });
  }
}
