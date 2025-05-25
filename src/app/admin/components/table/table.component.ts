import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ConfirmActionComponent } from "../modals/confirm-action/confirm-action.component";
import { InfoProductComponent } from "../modals/info-product/info-product.component";
import { ButtonActionComponent } from "../button-action/button-action.component";
import { Produto } from '../../../core/types/produto.types';
import { ProdutoService } from '../../../core/services/produto.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    ConfirmActionComponent,
    InfoProductComponent,
    ButtonActionComponent,
    CommonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit {

  listaProdutos: Produto[] = [];

  private _textoBusca: string = '';
  produtosFiltrados: Produto[] = [];

  @Input() set produtos(value: Produto[]) {
    this.listaProdutos = value;
    this.filtrarProdutos();
  }

  @Input()
  set textoBusca(value: string) {
    this._textoBusca = value;
    this.filtrarProdutos();
  }
  get textoBusca(): string {
    return this._textoBusca;
  }

  produtoSelecionado: Produto = {
    nome: '',
    descricao: '',
    imagem: '',
    quantidade: '',
    tamanho: '',
    preco: ''
  };

  modalExclusaoAberto = false;
  modalInformacoesAberto = false;
  modalAlterarProdutoAberto = false;
  modalConfirmarAlteracaoAberto = false;
  modalErroAlteracao = false;

  constructor(private service: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
      this.filtrarProdutos();
    });
  }

  filtrarProdutos() {
    if (!this.textoBusca || this.textoBusca.trim() === '') {
      this.produtosFiltrados = [...this.listaProdutos];
    } else {
      const busca = this.textoBusca.toLowerCase().trim();
      this.produtosFiltrados = this.listaProdutos.filter(produto =>
        produto.nome.toLowerCase().startsWith(busca)
      );
    }
  }

  abrirModalExclusao(produto: Produto) {
    this.produtoSelecionado = produto;
    this.modalExclusaoAberto = true;
  }

  fecharModalExclusao() {
    this.modalExclusaoAberto = false;
  }

  abrirModalInformacoes(produto: Produto) {
    this.produtoSelecionado = produto;
    this.modalInformacoesAberto = true;
  }

  fecharModalInformacoes() {
    this.modalInformacoesAberto = false;
  }

  abrirAlterarProduto(produto: Produto) {
    this.produtoSelecionado = { ...produto };
    this.modalAlterarProdutoAberto = true;
  }

  fecharAlterarProduto() {
    this.modalAlterarProdutoAberto = false;
  }

  abrirConfirmarAlteracaoProduto() {
    this.modalConfirmarAlteracaoAberto = true;
  }

  fecharConfirmarAlteracaoProduto() {
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
        this.listaProdutos = this.listaProdutos.filter(p => p.id !== id);
        this.filtrarProdutos();
      });
    }
  }

  confirmarAlteracaoProduto() {
    if (
      !this.produtoSelecionado.nome?.trim() ||
      !this.produtoSelecionado.descricao?.trim() ||
      !this.produtoSelecionado.quantidade?.toString().trim() ||
      !this.produtoSelecionado.tamanho?.trim() ||
      !this.produtoSelecionado.preco?.toString().trim() ||
      !this.produtoSelecionado.imagem?.toString().trim()
    ) {
      this.modalErroAlteracao = true;
      return;
    }

    if (this.produtoSelecionado && this.produtoSelecionado.id) {
      this.service.editar(this.produtoSelecionado).subscribe(() => {
        this.abrirConfirmarAlteracaoProduto()

        this.service.listar().subscribe(produtos => {
          this.listaProdutos = produtos;
          this.filtrarProdutos();
        });
      });
    }
  }

  trackByProduto(index: number, produto: Produto): number | string {
    return produto.id ?? index;
  }
}
