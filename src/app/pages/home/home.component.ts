import { Router, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ListProductsComponent } from "../../components/list-products/list-products.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductBoxComponent } from "../../components/product-box/product-box.component";
import { WhiteRoundButtonComponent } from "../../components/buttons/white-round-button/white-round-button.component";
import { BlackSquareButtonComponent } from "../../components/buttons/black-square-button/black-square-button.component";
import { CaroselComponent } from "../../components/carrosel/carosel.component";
import { Produto } from '../../core/types/produto.types';
import { ProdutoService } from '../../core/services/produto.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, HeaderComponent, ListProductsComponent, FooterComponent, ProductBoxComponent, WhiteRoundButtonComponent, BlackSquareButtonComponent, CaroselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  @Input() listaProdutos: Produto[] = [];

  produtoSelecionado: Produto = {
    nome: '',
    descricao: '',
    imagem: '',
    quantidade: '',
    tamanho: '',
    preco: ''
  };

  constructor(private service: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.service.listar().subscribe((produtos) => {
      this.listaProdutos = produtos;
    })
  }
}
